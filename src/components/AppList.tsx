// components/AppList.js
import Link from 'next/link';
import React from 'react';

const apps = [
    { id: 'gitlab', name: 'GitLab' },
    { id: 'jaeger', name: 'Jaeger' },
    // Add other apps here
];

export default function AppList() {
    return (
        <div className="app-list">
            {apps.map((app) => (
                <Link href={`/apps/${app.id}`} key={app.id}>{app.name}</Link>
            ))}
        </div>
    );
}
