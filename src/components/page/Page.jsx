import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = ({ pageTitle, pageDescription }) => {
    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>
            {/* Your page content here */}
        </div>
    );
};

export default Page;