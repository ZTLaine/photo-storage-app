import {useEffect, useState} from "react";
import {ListObjectsCommand} from "@aws-sdk/client-s3";
import {s3Client} from "../aws-config.js";

function BucketTest() {
    const [objects, setObjects] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function listObjects() {
            try {
                const command = new ListObjectsCommand({Bucket: "photo-storage-app-practice-lyur6ty4o0-ztl"});


                const response = await s3Client.send(command);
                setObjects(response.Contents || []);
            } catch (error) {
                setError(error.message);
            }
        }

        listObjects();
    }, []);
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Bucket Contents:</h2>
            <ul>
                {objects.map((object) => (
                    <li key={object.Key}>{object.Key}</li>
                ))}
            </ul>
        </div>
    );
}

export default BucketTest;