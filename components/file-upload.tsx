// "use client";

// import toast from "react-hot-toast";

// import { ourFileRouter } from "@/app/api/uploadthing/core";
// import { UploadDropzone } from "@uploadthing/react";

// interface FileUploadProps {
//   onChange: (url?: string) => void;
//   endpoint: keyof typeof ourFileRouter;
// }

// export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
//   return (
//     <UploadDropzone
//       endpoint={endpoint}
//       onClientUploadComplete={(res) => {
//         onChange(res?.[0].url);
//       }}
//       onUploadError={(error: Error) => {
//         toast.error(`${error?.message}`);
//       }}
//     />
//   );
// };
