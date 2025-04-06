import GridItem from '../GridItem/GridItem';
import Grid from '../Grid/Grid';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';
const PhotosGallery = ({ images, openModal }) => {
  return (
    <Grid>
      {images.map(item => (
        <GridItem key={item.id}>
          <PhotosGalleryItem
            color={item.avg_color}
            src={item.src}
            alt={item.alt}
            openModal={openModal}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
export default PhotosGallery;
