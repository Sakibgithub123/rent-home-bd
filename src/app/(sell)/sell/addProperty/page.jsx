import React from 'react';
import Layout from '../Layout';
import AddProperty from '@/components/AddProperty/AddProperty';

const page = () => {
    return (
        <Layout>
            <div>
                <AddProperty />
            </div>
        </Layout>
    );
};

export default page;