import { FC } from "react";

// style
import {
  MediaSection,
  MediaImage,
  MediaText,
  MediaLabel,
  MediaInput,
} from "../styles/components/media";

interface IMediaCard {
  media: string;
  onChange: (e: any) => void;
}

export const MediaCard: FC<IMediaCard> = ({ media, onChange }) => {
  return (
    <>
      <MediaSection>
        {media?.length >= 1 ? (
          <MediaLabel htmlFor="media-input">
            <MediaImage src={media} />
          </MediaLabel>
        ) : (
          <MediaLabel htmlFor="media-input">
            <MediaText>Select Media</MediaText>
          </MediaLabel>
        )}

        <MediaInput
          id="media-input"
          type="file"
          hidden
          onChange={onChange ? onChange : undefined}
        />
      </MediaSection>
    </>
  );
};
