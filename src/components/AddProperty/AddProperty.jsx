"use client"
import useAxiousPublic from "@/lib/axiousPublic";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProperty = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors }, } = useForm({
        defaultValues: { propertyUnit: "", propertyFace: "", locationCity: "", floorPosition: "", propertyFace: "", priceUnit: "", paymentCycle: "", availableFor: "" }
    });
    const titleValue = watch("title", "");
    const descriptionValue = watch("description", "");
    const [images, setImages] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);
    const [error, setError] = useState("");
    const fileInputRef = useRef(null);

    const imageBBApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
    const imageUploadURL = `https://api.imgbb.com/1/upload?key=${imageBBApiKey}`;

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
            id: URL.createObjectURL(file),
            file,
        }));
        setImages((prev) => [...prev, ...newImages]);
        setError("");
    };

    const handleThumbnailClick = (imageId) => {
        setThumbnail(imageId);
    };

    const handleImageRemove = (imageId) => {
        setImages((prev) => prev.filter((image) => image.id !== imageId));
        if (thumbnail === imageId) setThumbnail(null);
    };

    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    const onSubmit = async (data) => {
        if (images.length === 0) {
            toast.error("Please upload at least one image.");
            return;
        }

        if (!thumbnail) {
            toast.error("Please select a thumbnail.");
            return;
        }

        const uploadedImageUrls = [];
        for (const image of images) {
            const formData = new FormData();
            formData.append("image", image.file);

            try {
                const res = await axios.post(imageUploadURL, formData, {
                    headers: { "content-type": "multipart/form-data" },
                });
                if (res.data.success) {
                    uploadedImageUrls.push(res.data.data.display_url);
                } else {
                    throw new Error("Image upload failed");
                }
            } catch (error) {
                toast.error("Failed to upload images. Please try again.");
                console.error(error);
                return;
            }
        }

        const propertyInfo = {
            ...data,
            images: uploadedImageUrls,
            thumbnail: uploadedImageUrls.find((url) => images.find((img) => img.id === thumbnail)?.file.name === url),
        };
        console.log(propertyInfo);

        try {
            const res = await axios.post("http://localhost:3000/sell/addProperty/api", propertyInfo);
            if (res.data) {
                toast.success("Property added successfully!");
                setImages([]);
                setThumbnail(null);
            } else {
                throw new Error("Failed to save property");
            }
        } catch (error) {
            toast.error("Failed to save property. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Post Property</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md space-y-6">
                {/* Property Information */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-stone-600">Property Information</h2>
                    {/* Post Type */}
                    <div className="mb-4  text-stone-600">
                        <label className="block font-medium mb-2">I want to post*</label>
                        <div className="flex items-center gap-4 px-28">
                            {["Rent", "Sell"].map((type) => (
                                <label key={type} className="flex items-center gap-2">
                                    <input
                                        {...register("postType", { required: "Post Type is required" })}
                                        type="radio"
                                        value={type}
                                        className="radio radio-success w-4 h-4"
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                        {errors.postType && <span className="text-red-500">{errors.postType.message}</span>}
                    </div>

                    {/* Property Category */}
                    <div className="mb-4 text-stone-600">
                        <label className="block font-medium mb-2">Property Category*</label>
                        <div className="flex items-center gap-4 px-28">
                            {["Residential", "Commercial"].map((category) => (
                                <label key={category} className="flex items-center gap-2">
                                    <input
                                        {...register("propertyCategory", {
                                            required: "Property Category is required",
                                        })}
                                        type="radio"
                                        value={category}
                                        className="radio radio-success w-4 h-4"
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>
                        {errors.propertyCategory && (
                            <span className="text-red-500">{errors.propertyCategory.message}</span>
                        )}
                    </div>

                    {/* Property Type */}
                    <div className="mb-4 text-stone-600">
                        <label className="block font-medium mb-2">Property Type*</label>
                        <div className="flex flex-wrap gap-4 px-28">
                            {[
                                "Apartment/Flats",
                                "Independent House",
                                "Duplex Home",
                                "Studio Apartment",
                                "Sublet/Room",
                                "Guest House",
                                "Plot",
                                "Showroom / Shop / Restaurant",
                                "Office Space",
                                "Agriculture / Farm Land",
                                "Industrial Space",
                            ].map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setValue("propertyType", type)}
                                    className={`px-4 py-2 rounded border ${watch("propertyType") === type ? "bg-green-50 text-green-600" : "bg-gray-100"
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        {errors.propertyType && (
                            <span className="text-red-500">{errors.propertyType.message}</span>
                        )}
                    </div>

                    {/* Property Size */}
                    <div className="mb-4 text-stone-600 flex items-center gap-4">
                        <div className="w-1/2 ">
                            <label className="block font-medium mb-2">Property Size*</label>
                            <input
                                {...register("propertySize", { required: "Property Size is required" })}
                                type="text"
                                name="propertySize"
                                placeholder="Ex: 1000"
                                // onChange={handleInputChange}
                                className="input input-bordered w-full focus:outline-none rounded-none"
                            />
                        </div>
                        {errors.propertySize && <span>{errors.propertySize.message}</span>}
                        <div className="w-1/2">
                            <label className="block font-medium mb-2">Unit</label>
                            <select
                                name="propertyUnit"
                                // onChange={handleInputChange}
                                className="select select-bordered w-full focus:outline-none rounded-none"
                            >
                                <option value="Sq Feet">Sq Feet</option>
                                <option value="Sq Meter">Sq Meter</option>
                            </select>
                        </div>
                    </div>

                    {/* Property Face */}
                    <div className="mb-4 text-stone-600">
                        <label className="block font-medium mb-2">Property Face*</label>
                        <select
                            {...register("propertyFace", { required: "Property Face is required" })}
                            name="propertyFace"
                            // onChange={handleInputChange}
                            className="select select-bordered w-full focus:outline-none rounded-none"
                        >
                            <option value="">Select Face</option>
                            <option value="East">East</option>
                            <option value="West">West</option>
                            <option value="North">North</option>
                            <option value="South">South</option>
                        </select>
                        {errors.propertyFace && <span>{errors.propertyFace.message}</span>}
                    </div>

                    {/* Location Details */}
                    <div className="mb-4 text-stone-600">
                        <label className="block font-medium mb-2">Location Details*</label>
                        <div className="flex items-center gap-4">
                            <select
                                {...register("locationCity", { required: "City is required" })}
                                className="select select-bordered focus:outline-none rounded-none w-1/3"
                            >
                                <option value="">City</option>
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Los Angeles</option>
                            </select>
                            {errors.locationCity && (
                                <span className="text-red-500">{errors.locationCity.message}</span>
                            )}
                            <input
                                {...register("locationDetails", {
                                    required: "Location Details is required",
                                })}
                                type="text"
                                placeholder="Write detailed location"
                                className="select select-bordered focus:outline-none rounded-none w-2/3"
                            />
                        </div>
                    </div>

                </div>

                {/* Property Features */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-stone-600">Property Features</h2>

                    {["Bedroom", "Bathroom", "Balcony", "Kitchen", "Parking"].map((field) => (
                        <div key={field} className="mb-4 text-stone-600">
                            <label className="block font-medium mb-2">{field}*</label>
                            <div className="flex items-center gap-2 px-20">
                                {[0, 1, 2, 3, 4, "5+"].map((num) => (
                                    <button
                                        key={num}
                                        type="button"
                                        onClick={() => setValue(field.toLowerCase(), num)}
                                        className={`px-4 py-2 border rounded ${watch(field.toLowerCase()) === num ? "bg-green-500 text-white" : "bg-gray-100"
                                            }`}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                            <input
                                {...register(field.toLowerCase(), { required: `${field} is required` })}
                                type="hidden"
                            />
                            {errors[field.toLowerCase()] && (
                                <span className="text-red-500">{errors[field.toLowerCase()].message}</span>
                            )}
                        </div>
                    ))}
                    {/* Floor Type */}
                    <div className="mb-4 text-stone-600">
                        <label className="block font-medium mb-2">Floor Type</label>
                        <div className="flex items-center gap-4 px-20">
                            {["Marble", "Mosaic", "Tiled", "Others"].map((type) => (
                                <label key={type} className="flex items-center gap-2">
                                    <input
                                        {...register("floorType", { required: "Floor Type is required" })}
                                        type="radio"
                                        value={type}
                                        className="radio radio-success w-4 h-4"
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                        {errors.floorType && <span className="text-red-500">{errors.floorType.message}</span>}
                    </div>

                    {/* Furnish Status */}
                    <div className="mb-4 text-stone-600">
                        <label className="block font-medium mb-2">Furnish Status*</label>
                        <div className="flex items-center gap-4 px-20">
                            {["Unfurnished", "Furnished", "Semi-Furnished"].map((status) => (
                                <label key={status} className="flex items-center gap-2">
                                    <input
                                        {...register("furnishStatus", { required: "Furnish Status is required" })}
                                        type="radio"
                                        value={status}
                                        className="radio radio-success w-4 h-4"
                                    />
                                    {status}
                                </label>
                            ))}
                        </div>
                        {errors.furnishStatus && <span className="text-red-500">{errors.furnishStatus.message}</span>}
                    </div>

                    {/* Boolean Options */}
                    {["Living Room", "Drawing Room", "Dining Room"].map((field) => (
                        <div key={field} className="mb-4 text-stone-600">
                            <label className="block font-medium mb-2">{field}</label>
                            <div className="flex items-center gap-4 px-20">
                                <label className="flex items-center gap-2">
                                    <input
                                        {...register(field.toLowerCase().replace(" ", ""), { required: `${field} is required` })}
                                        type="radio"
                                        value="Yes"
                                        className="radio radio-success w-4 h-4"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        {...register(field.toLowerCase().replace(" ", ""), { required: `${field} is required` })}
                                        type="radio"
                                        value="No"
                                        className="radio radio-success w-4 h-4"
                                    />
                                    No
                                </label>
                            </div>
                            {errors[field.toLowerCase().replace(" ", "")] && (
                                <span className="text-red-500">{errors[field.toLowerCase().replace(" ", "")]?.message}</span>
                            )}
                        </div>
                    ))}

                    {/* floors  */}
                    <div className="flex gap-5">
                        {/* Floor Position */}
                        <div className="mb-4 text-stone-600 flex-1">
                            <label className="block font-medium mb-2">Floor Position in Building*</label>
                            <select
                                {...register("floorPosition", { required: "Floor Position is required" })}
                                className="w-full select select-bordered focus:outline-none rounded-none"
                            >
                                <option value="">Select Floor Position</option>
                                <option value="Ground Floor">Ground Floor</option>
                                <option value="First Floor">First Floor</option>
                                <option value="Second Floor">Second Floor</option>
                            </select>
                            {errors.floorPosition && <span className="text-red-500">{errors.floorPosition.message}</span>}
                        </div>

                        {/* Total Floors */}
                        <div className="mb-4 text-stone-600">
                            <label className="block font-medium mb-2">Total No. of Floors*</label>
                            <input
                                {...register("totalFloors", {
                                    required: "Total No. of Floors is required",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Please enter a valid number",
                                    },
                                })}
                                type="text"
                                placeholder="Enter Total Floors"
                                className="w-full border border-gray-300  p-3 outline-none"
                            />
                            {errors.totalFloors && <span className="text-red-500">{errors.totalFloors.message}</span>}
                        </div>
                    </div>

                    {/* Others Multi-select Options */}
                    {[
                        // { label: "Features/Amenities (Indoor)", field: "indoorAmenities" },
                        // { label: "Features (Outdoor)", field: "outdoorFeatures" },
                        { label: "Others", field: "others" },
                    ].map(({ label, field }) => (
                        <div key={field} className="mb-4 text-stone-600">
                            <label className="block font-medium mb-2">{label}</label>
                            <span className="text-gray-400 text-sm">Select multiple</span>
                            <div className="flex flex-wrap gap-4 px-20">
                                {[
                                    "Servent Room",
                                    "Staff Toilet",
                                ].map((feature) => (
                                    <label key={feature} className="flex items-center gap-2">
                                        <input
                                            {...register(field)}
                                            type="checkbox"
                                            value={feature}
                                            className="checkbox checkbox-success h-5 w-6"
                                        />
                                        {feature}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Multi-select Options */}
                    {[
                        { label: "Features/Amenities (Indoor)", field: "indoorAmenities" },
                        // { label: "Features (Outdoor)", field: "outdoorFeatures" },
                        // { label: "Features (Others)", field: "otherFeatures" },
                    ].map(({ label, field }) => (
                        <div key={field} className="mb-4 text-stone-600">
                            <label className="block font-medium mb-2">{label}</label>
                            <span className="text-gray-400 text-sm">Select multiple</span>
                            <div className="flex flex-wrap gap-4 px-20">
                                {[
                                    "Intercom",
                                    "Wi-Fi",
                                    "Fire Alarm",
                                    "Electricity",
                                    "Safety Grill",
                                    "Internet",
                                    "Govt. Gas",
                                    "Hot Water",
                                    "Emergency Exit",
                                ].map((feature) => (
                                    <label key={feature} className="flex items-center gap-2">
                                        <input
                                            {...register(field)}
                                            type="checkbox"
                                            value={feature}
                                            className="checkbox checkbox-success h-5 w-6"
                                        />
                                        {feature}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Multi-select Options */}
                    {[
                        // { label: "Features/Amenities (Indoor)", field: "indoorAmenities" },
                        { label: "Features (Outdoor)", field: "outdoorFeatures" },
                        // { label: "Features (Others)", field: "otherFeatures" },
                    ].map(({ label, field }) => (
                        <div key={field} className="mb-4 text-stone-600">
                            <label className="block font-medium mb-2">{label}</label>
                            <span className="text-gray-400 text-sm">Select multiple</span>
                            <div className="flex flex-wrap gap-4 px-20">
                                {[
                                    "Elevator",
                                    "Security Guard",
                                    "CCTV",
                                    "Landscape Garden",
                                    "WASA",
                                    "Guard's Room",
                                    "Rooftop Garden",
                                    "Visitor's Car Parking",
                                    "Gymnasium",
                                    "Swimming Pool",
                                    "Community Center",
                                ].map((feature) => (
                                    <label key={feature} className="flex items-center gap-2">
                                        <input
                                            {...register(field)}
                                            type="checkbox"
                                            value={feature}
                                            className="checkbox checkbox-success h-5 w-6"
                                        />
                                        {feature}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Multi-select Options */}
                    {[
                        // { label: "Features/Amenities (Indoor)", field: "indoorAmenities" },
                        // { label: "Features (Outdoor)", field: "outdoorFeatures" },
                        { label: "Features (Others)", field: "otherFeatures" },
                    ].map(({ label, field }) => (
                        <div key={field} className="mb-4 text-stone-600">
                            <label className="block font-medium mb-2">{label}</label>
                            <span className="text-gray-400 text-sm">Select multiple</span>
                            <div className="flex flex-wrap gap-4 px-20">
                                {[
                                    "Child Allowed",
                                    "Driver Room",
                                    "Pet Allowed",
                                ].map((feature) => (
                                    <label key={feature} className="flex items-center gap-2">
                                        <input
                                            {...register(field)}
                                            type="checkbox"
                                            value={feature}
                                            className="checkbox checkbox-success h-5 w-6"
                                        />
                                        {feature}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>

                {/* property image */}
                <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-stone-600">Upload Photos & Video</h2>
                    <div className="mb-6">
                        <label className="block text-gray-600 font-medium mb-2">Upload Photos*</label>
                        <div
                            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer"
                            onClick={handleUploadButtonClick}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                            <button type="button" className="text-blue-500">
                                Click here to upload
                            </button>
                            <p className="text-sm text-gray-400">(PNG, JPG, or JPEG - Recommended 800 × 400px)</p>
                            {error && <p className="text-sm text-red-500">{error}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {images.map((image) => (
                            <div key={image.id} className="relative flex flex-col items-center">
                                <img
                                    src={image.id}
                                    alt="Uploaded"
                                    className={`w-42 h-24 object-cover rounded-lg border-2 ${thumbnail === image.id ? "border-blue-500" : "border-gray-300"
                                        }`}
                                    onClick={() => handleThumbnailClick(image.id)}
                                />
                                <button
                                    type="button"
                                    className={`mt-2 text-sm rounded px-2 ${thumbnail === image.id ? "bg-blue-500 text-white" : "bg-gray-200"
                                        }`}
                                    onClick={() => handleThumbnailClick(image.id)}
                                >
                                    Set as Thumbnail
                                </button>
                                <button
                                    type="button"
                                    className="absolute top-0 right-0 bg-red-500 text-white w-6 h-6 rounded-full text-xs"
                                    onClick={() => handleImageRemove(image.id)}
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Video Link */}
                    <div className="mt-6">
                        <label className="block text-gray-600 font-medium mb-2">YouTube or Vimeo video link</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-2 outline-none"
                            placeholder="https://www.youtube.com/watch?v=K4TOrB7at0Y"
                            {...register('videoLink', { pattern: { value: /^(https?:\/\/(?:www\.)?(youtube|vimeo)\.com\/[^\s]+)$/, message: 'Please enter a valid YouTube or Vimeo URL' } })}
                        />
                    </div>
                </div>
                {/* terms  */}
                <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
                    <h2 className="text-xl font-bold mb-4 text-stone-600">Terms</h2>

                    {/* Advance Deposit */}
                    <div className="mb-4 text-stone-600">
                        <label htmlFor="advance-deposit" className="block text-gray-700 font-medium">
                            Advance Deposit<span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center mt-1">
                            <input
                                type="number"
                                id="advance-deposit"
                                placeholder="Ex. 1000"
                                className="w-full border border-gray-300 rounded-l p-2 outline-none"
                                {...register("advanceDeposit", { required: "Advance Deposit is required", min: { value: 1, message: "Minimum deposit is 1 BDT" } })}
                            />
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 border rounded-r">
                                BDT
                            </span>
                        </div>
                        {errors.advanceDeposit && <p className="text-red-500 text-sm">{errors.advanceDeposit.message}</p>}
                    </div>

                    {/* Available From */}
                    <div className="mb-4 text-stone-600">
                        <label htmlFor="available-from" className="block text-gray-700 font-medium">
                            Available From<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="available-from"
                            className="w-full mt-1 border border-gray-300 rounded p-2 outline-none"
                            {...register("availableFrom", { required: "Available From date is required" })}
                        />
                        {errors.availableFrom && <p className="text-red-500 text-sm">{errors.availableFrom.message}</p>}
                    </div>

                    {/* Available For */}
                    <div className="mb-4 text-stone-600">
                        <label htmlFor="available-for" className="block text-gray-700 font-medium">
                            Available For<span className="text-red-500">*</span>
                        </label>
                        <select
                            id="available-for"
                            className="w-full mt-1 border border-gray-300 rounded p-2 outline-none"
                            {...register("availableFor", { required: "This field is required" })}
                        >
                            <option value="">Available for</option>
                            <option value="rent">Rent</option>
                            <option value="sale">Sale</option>
                        </select>
                        {errors.availableFor && <p className="text-red-500 text-sm">{errors.availableFor.message}</p>}
                    </div>

                    {/* Service Charge */}
                    <div className="mb-4 text-stone-600">
                        <label htmlFor="service-charge" className="block text-gray-700 font-medium">
                            Service Charge
                        </label>
                        <div className="flex items-center mt-1">
                            <input
                                type="number"
                                id="service-charge"
                                placeholder="Ex. 1000"
                                className="w-full border border-gray-300 rounded-l p-2 outline-none"
                                {...register("serviceCharge")}
                            />
                            <span className="bg-gray-100 text-gray-700 px-4 py-2 border rounded-r">
                                BDT
                            </span>
                        </div>
                    </div>

                    {/* Property Condition */}
                    <div className="mb-4 text-stone-600">
                        <label className="block text-gray-700 font-medium">Property Condition</label>
                        <div className="flex items-center gap-4 mt-2">
                            <label className="flex items-center">
                                <input type="radio" name="property-condition" value="new" {...register("propertyCondition", { required: "Property condition is required" })} className="mr-2" />
                                New
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="property-condition" value="resale" {...register("propertyCondition", { required: "Property condition is required" })} className="mr-2" />
                                Resale
                            </label>
                        </div>
                        {errors.propertyCondition && <p className="text-red-500 text-sm">{errors.propertyCondition.message}</p>}
                    </div>

                    {/* Price Negotiable */}
                    <div className="mb-4 text-stone-600">
                        <label className="block text-gray-700 font-medium">Price Negotiable</label>
                        <div className="flex items-center gap-4 mt-2">
                            <label className="flex items-center">
                                <input type="radio" name="price-negotiable" value="yes" {...register("priceNegotiable", { required: "Price negotiability is required" })} className="mr-2" />
                                Yes
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="price-negotiable" value="no" {...register("priceNegotiable", { required: "Price negotiability is required" })} className="mr-2" />
                                No
                            </label>
                        </div>
                        {errors.priceNegotiable && <p className="text-red-500 text-sm">{errors.priceNegotiable.message}</p>}
                    </div>
                </div>

                {/* finale details  */}
                <div
                    className="max-w-4xl mx-auto p-6 bg-white shadow rounded"
                >
                    <h2 className="text-xl font-bold mb-4 text-stone-600">Final Details</h2>

                    {/* Property Title */}
                    <div className="mb-4 text-stone-600">
                        <label
                            htmlFor="property-title"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Property Title<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="property-title"
                            placeholder="Apartment up for rent @Baridhara Diplomatic Zone"
                            maxLength={100}
                            className="w-full border border-gray-300 rounded p-2 outline-none"
                            {...register("title", {
                                required: "Property title is required",
                                maxLength: { value: 100, message: "Max length is 100 characters" },
                            })}
                        />
                        <p className="text-sm text-gray-500">{`${titleValue.length}/100`}</p>
                        {errors.title && (
                            <p className="text-sm text-red-500">{errors.title.message}</p>
                        )}
                    </div>

                    {/* Property Description */}
                    <div className="mb-4 text-stone-600">
                        <label
                            htmlFor="property-description"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Property Description<span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="property-description"
                            placeholder="Write detailed description"
                            maxLength={500}
                            rows="5"
                            className="w-full border border-gray-300 rounded p-2 outline-none"
                            {...register("description", {
                                required: "Property description is required",
                                maxLength: { value: 500, message: "Max length is 500 characters" },
                            })}
                        ></textarea>
                        <p className="text-sm text-gray-500">{`${descriptionValue.length}/500`}</p>
                        {errors.description && (
                            <p className="text-sm text-red-500">{errors.description.message}</p>
                        )}
                    </div>

                    {/* Rent Price */}
                    <div className="mb-4 text-stone-600">
                        <label htmlFor="rent-price" className="block text-gray-700 font-medium mb-2">
                            Rent Price<span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center mt-1 gap-2">
                            {/* Currency Label */}
                            <div className="flex items-center">
                                <span className="bg-gray-100 text-gray-700 px-4 py-2 border border-gray-300 rounded-l-md">
                                    BDT
                                </span>
                                {/* Rent Price Input */}
                                <input
                                    type="number"
                                    id="rent-price"
                                    placeholder="Ex. 10"
                                    className="flex-1 border-t border-b border-gray-300 px-4 py-2  outline-none"
                                    {...register("price", {
                                        required: "Rent price is required",
                                        min: { value: 1, message: "Minimum price is 1 BDT" },
                                    })}
                                />
                                {/* Rent Unit Dropdown */}
                                <div className="border border-gray-300 px-4 py-2 border-l-0 rounded-r-md focus:ring focus:ring-blue-200 outline-none" >
                                    <select
                                        defaultValue=""
                                        className="outline-none border-none"
                                        {...register("priceUnit", { required: "Price unit is required" })}
                                    >
                                        <option value="" disabled>
                                            Lac
                                        </option>
                                        <option value="Lac">Lac</option>
                                        <option value="Thousand">Thousand</option>
                                    </select>
                                </div>
                            </div>
                            {/* Payment Cycle Dropdown */}
                            <div>
                                <select
                                    defaultValue=""
                                    className="border border-gray-300 px-4 py-2  outline-none"
                                    {...register("paymentCycle", { required: "Payment cycle is required" })}
                                >
                                    <option value="" disabled>
                                        Per Month
                                    </option>
                                    <option value="month">Per Month</option>
                                    <option value="year">Per Year</option>
                                </select>
                            </div>
                        </div>
                        {/* Error Messages */}
                        {errors.price && (
                            <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>
                        )}
                        {errors.priceUnit && (
                            <p className="text-sm text-red-500 mt-1">{errors.priceUnit.message}</p>
                        )}
                        {errors.paymentCycle && (
                            <p className="text-sm text-red-500 mt-1">{errors.paymentCycle.message}</p>
                        )}
                    </div>



                    {/* Owner Info */}
                    <div className="mb-4 text-stone-600">
                        <label htmlFor="owner-info" className="block text-gray-700 font-medium mb-2">
                            Owner Info
                        </label>
                        <input
                            type="text"
                            id="owner-info"
                            placeholder="Enter owner information"
                            className="w-full border border-gray-300 rounded p-2 outline-none"
                            {...register("ownerName", { required: "Owner info is required" })}
                        />
                        {errors.ownerName && (
                            <p className="text-sm text-red-500">{errors.ownerName.message}</p>
                        )}
                        <input
                            type="text"
                            id="owner-info"
                            placeholder="Enter owner information"
                            className="w-full border border-gray-300 rounded mt-4 p-2 outline-none"
                            {...register("ownerEmail", { required: "Owner info is required" })}
                        />
                        {errors.ownerEmail && (
                            <p className="text-sm text-red-500">{errors.ownerEmail.message}</p>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddProperty;
