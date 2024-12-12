import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  try {
    const db = await connectDB(); // Ensure connectDB handles connection errors internally
    const newProperty = await request.json();

    // Insert the new property into the database
    const result = await db.collection("properties").insertOne(newProperty);

    // Return a success response with the inserted document's ID
    return new Response(
      JSON.stringify({
        message: "Property added successfully",
        propertyId: result.insertedId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error adding property:", error);

    // Return an error response
    return new Response(
      JSON.stringify({
        error: "Failed to add property",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
