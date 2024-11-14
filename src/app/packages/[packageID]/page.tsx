//TODO: Deal with client side rendering to support state management
// import { useState } from 'react'
import Link from 'next/link';

// import { UninstallModal } from '../../_components/UninstallModal'

export default function PackagePage() {
    // const router = useRouter();
    // const [showModal, setShowModal] = useState(false);

    // const handleUninstall = () => {
    //     setShowModal(true);
    // };

    return (
        <>
            <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[4rem]">Package Name (need to pull from path)</h1>
            {/* <button onClick={handleUninstall}>Uninstall</button>
            {showModal && (
                <UninstallModal
                    onClose={() => setShowModal(false)}
                    onConfirm={() => {
                        // Handle the uninstall confirmation
                        setShowModal(false);
                    }}
                />
            )} */}
            <Link href="/">
                <button className="bg-[hsl(280,100%,40%)] hover:bg-[hsl(280,100%,60%)] text-white font-bold py-2 px-4 rounded">
                    Back
                </button>
            </Link>
        </>

    );
}
