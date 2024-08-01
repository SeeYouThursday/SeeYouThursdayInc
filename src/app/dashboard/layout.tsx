import React from 'react';

export default function DashboardLayout({ children, productForm }: {
    children: React.ReactNode;
    productForm: React.ReactNode;
}) {
    return (
        <div>
            {productForm}
            {children}
        </div>
    );
}