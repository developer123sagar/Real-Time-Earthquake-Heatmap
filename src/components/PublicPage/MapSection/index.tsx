import { useMapLibreGLMap } from '@Components/common/MapLibreComponents';
import BaseLayerSwitcher from '@Components/common/MapLibreComponents/BaseLayerSwitcher';
import MapContainer from '@Components/common/MapLibreComponents/MapContainer';
import hasErrorBoundary from '@Utils/hasErrorBoundary';

function MapSection() {
  // initialize map
  const { isMapLoaded, map } = useMapLibreGLMap({
    mapOptions: {
      center: [0, 0],
      zoom: 1,
    },
  });

  return (
    <div className="naxatw-h-full naxatw-w-full">
      <MapContainer
        isMapLoaded={isMapLoaded}
        map={map}
        style={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <BaseLayerSwitcher activeLayer="osm" />
      </MapContainer>
    </div>
  );
}

export default hasErrorBoundary(MapSection);
