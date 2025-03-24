import { Box, Text, Icon } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi"; 

function FileUpload() {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
                console.log("Archivo seleccionado:", file);
            }
        },
    });

    return (
        <Box
            {...getRootProps()}
            border="2px dashed"
            borderColor={isDragActive ? "white" : "gray.200"}
            borderRadius="md"
            p={6}
            textAlign="center"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{ borderColor: "white" }}
        >
            <input {...getInputProps()} />
            <Icon as={FiUploadCloud} w={8} h={8} mb={2} color="white" />
            <Text fontSize="lg" color="white">
                {isDragActive
                    ? "Suelta el archivo aquí"
                    : "Arrastra y suelta un archivo aquí"}
            </Text>
            <Text fontSize="sm" color="white">
                o haz clic para seleccionar un archivo
            </Text>
        </Box>
    );
}

export default FileUpload;