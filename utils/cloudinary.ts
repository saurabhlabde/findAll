import axios from "axios";

export const uploadImage = async (e: any) => {
        const url = (<HTMLInputElement>document.getElementById(`${e.target.id}`))
                .files[0];

        const formData = new FormData();
        formData.append("file", url);
        formData.append("upload_preset", "x3jnjaas");

        let uploadMedia;

        await axios
                .post("https://api.cloudinary.com/v1_1/sam-inc/image/upload", formData)
                .then((res) => {
                        if (res.status === 200) {
                                const {
                                        data: { secure_url },
                                } = res;

                                uploadMedia = secure_url;
                        }
                })
                .catch((error) => {
                        console.log(error, "error 404");
                });

        return uploadMedia;
};
