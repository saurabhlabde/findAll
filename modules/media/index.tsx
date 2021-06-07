import { Dispatch, FC, SetStateAction } from "react";

// component
import { MediaCard } from "../../components/Media";

// utils
import { uploadImage } from "../../utils/cloudinary";

interface IMediaIndex {
  media: string;
  setMedia: Dispatch<SetStateAction<string>>;
}

export const MediaIndex: FC<IMediaIndex> = ({ media, setMedia }) => {
  const onMediaChangeHandel = async (e: any) => {
    const uploadedImage = await uploadImage(e);

    if (uploadedImage) {
      setMedia(uploadedImage);
    }
  };

  return <MediaCard media={media} onChange={onMediaChangeHandel} />;
};
