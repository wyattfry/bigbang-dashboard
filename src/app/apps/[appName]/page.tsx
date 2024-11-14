// pages/apps/[appId].js
// import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import UninstallModal from '../../../components/UninstallModal';
import { useState } from 'react';
import React from 'react';

export default function AppDetail(appName) {
    // const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const handleUninstall = () => {
        setShowModal(true);
    };

    return (
        <div>
            <Navbar />
            <h1>Big Bang - {appName}</h1>
            <button onClick={handleUninstall}>Uninstall</button>
            {showModal && (
                <UninstallModal
                    onClose={() => setShowModal(false)}
                    onConfirm={() => {
                        // Handle the uninstall confirmation
                        setShowModal(false);
                    }}
                />
            )}
        </div>
    );
}
