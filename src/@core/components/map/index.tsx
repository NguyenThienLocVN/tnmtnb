import * as React from "react";
import { MapContainer, TileLayer, LayersControl, GeoJSON, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { BingLayer } from '../bingmap';

const { BaseLayer } = LayersControl;

function style() {
  return {
    fillColor: "transparent",
    weight: 3,
    opacity: 1,
    color: "orange", //Outline color
    fillOpacity: 1
  };
}

const MyData = () => {
  // create state variable to hold data when it is fetched
  const [data, setData] = React.useState<any | null>(null);

  // useEffect to fetch data on mount
  React.useEffect(() => {
    // async function!
    const getData = async () => {
      // 'await' the data
      // const response = await axios.get("url");
      const mapData = {
        "type":"FeatureCollection",
        "features":[{
          "geometry":{"type":"LineString","coordinates":[[105.918076,20.363713], [105.917665,20.363633], [105.916804,20.362727], [105.914961,20.360793], [105.913459,20.359189], [105.912789,20.358321], [105.912173,20.357529], [105.91142,20.356191], [105.9098,20.353265], [105.909473,20.349058], [105.909423,20.348021], [105.909154,20.348066], [105.908048,20.348208], [105.906469,20.348466], [105.90481,20.348762], [105.903551,20.349003], [105.902951,20.34918], [105.902503,20.349402], [105.902311,20.349547], [105.902024,20.349844], [105.901634,20.350436], [105.901395,20.350732], [105.901173,20.351233], [105.900725,20.352748], [105.900394,20.353847], [105.899934,20.354811], [105.899752,20.355152], [105.89948,20.355403], [105.899017,20.355671], [105.897641,20.356389], [105.896385,20.356986], [105.895833,20.357306], [105.895169,20.357635], [105.893696,20.358316], [105.893056,20.358645], [105.891984,20.359203], [105.891208,20.359585], [105.890528,20.359884], [105.889487,20.360313], [105.887743,20.361131], [105.885382,20.36218], [105.884173,20.362723], [105.882765,20.363396], [105.881524,20.363978], [105.880524,20.364497], [105.87954,20.364986], [105.878604,20.365438], [105.877699,20.365851], [105.877115,20.366119], [105.875939,20.36676], [105.875011,20.367181], [105.874018,20.36764], [105.873194,20.368022], [105.872418,20.368382], [105.872002,20.368573], [105.871569,20.368719], [105.871121,20.368964], [105.870769,20.369208], [105.87049,20.369489], [105.870164,20.369952], [105.869799,20.37065], [105.869418,20.37153], [105.869126,20.372432], [105.868708,20.373652], [105.868511,20.374281], [105.868416,20.374524], [105.868022,20.375767], [105.867611,20.377002], [105.867256,20.378094], [105.866774,20.379322], [105.866504,20.379936], [105.86629,20.380331], [105.866059,20.380642], [105.865699,20.380962], [105.865108,20.381226], [105.864937,20.38128], [105.8649,20.381283], [105.864405,20.381327], [105.86366,20.381409], [105.863105,20.381545], [105.860188,20.382117], [105.858688,20.382493], [105.858109,20.382596], [105.85766,20.382643], [105.857258,20.382656], [105.856666,20.382569], [105.856193,20.382438], [105.855043,20.38202], [105.85406,20.381712], [105.85329,20.381527], [105.852793,20.38144], [105.852462,20.381419], [105.851682,20.381557], [105.850501,20.38173], [105.849532,20.381946], [105.847418,20.382347], [105.84645,20.382586], [105.845753,20.382857], [105.845176,20.383172], [105.84461,20.383509], [105.843018,20.384264], [105.842039,20.384804], [105.841049,20.385411], [105.839493,20.386321], [105.839069,20.386535], [105.838502,20.386649], [105.835818,20.386818], [105.833833,20.387051], [105.833053,20.387233], [105.832522,20.387347], [105.831802,20.387562], [105.831294,20.38781], [105.830775,20.388069], [105.829419,20.388778], [105.828617,20.38915], [105.827614,20.389612], [105.826919,20.39005], [105.826341,20.390298], [105.823251,20.392419], [105.822777,20.392781], [105.821506,20.393819], [105.818927,20.395761], [105.818789,20.395884], [105.818454,20.396185], [105.817495,20.3968], [105.816936,20.397161], [105.816765,20.397234], [105.816374,20.39729]]},
          "type":"Feature","properties":{"detailContent":"<div class='landslide-popup container'> <div class='popup-content tab-content'> <div id='thong-tin-sat-lo' class='tab-pane fade in active show'> <div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Tên công trình:</p><p class='p-0 my-2'>Đê Hữu Sông Đáy</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Chiều dài (m):</p><p class='p-0 my-2'>8380</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Cấp đê:</p><p class='p-0 my-2'>3</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Loại đê:</p><p class='p-0 my-2'>Đê sông</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Thuộc huyện:</p><p class='p-0 my-2'>Huyện Gia Viễn</p></div></div><div id='hinh-anh' class='tab-pane fade'> </div></div></div>"},"id":null
          },
          {
          "geometry":{"type":"LineString","coordinates":[[105.816374,20.39729],[105.815899,20.397337],[105.815318,20.397348],[105.814851,20.397306],[105.814308,20.397219],[105.813374,20.397061],[105.812941,20.396988],[105.812736,20.396867],[105.812411,20.39668],[105.812038,20.396448],[105.811446,20.395984],[105.809695,20.395519],[105.806335,20.395099],[105.807811,20.392916],[105.807935,20.390998],[105.808229,20.390141],[105.808463,20.389435],[105.80861,20.388944],[105.808723,20.388504],[105.808791,20.388089],[105.808901,20.387316],[105.809022,20.386801],[105.80916,20.386344],[105.809473,20.385463],[105.809708,20.385013],[105.809979,20.384638],[105.810355,20.384238],[105.810925,20.383796],[105.811442,20.383329],[105.811722,20.383045],[105.811923,20.38272],[105.812036,20.382429],[105.812096,20.38208],[105.812181,20.381507],[105.812382,20.381202],[105.812678,20.380764],[105.813026,20.380035],[105.813312,20.379154],[105.813719,20.377816],[105.814021,20.376694],[105.814081,20.376444],[105.814183,20.375672],[105.814222,20.374792],[105.814279,20.373821],[105.81429,20.372542],[105.814278,20.371895],[105.814213,20.371381],[105.814061,20.370975],[105.813786,20.370486],[105.813395,20.369799],[105.813094,20.36941],[105.812748,20.368997],[105.811637,20.368453],[105.810558,20.367429],[105.809488,20.366529],[105.808913,20.365918],[105.808665,20.365587],[105.808478,20.365131],[105.808414,20.364808],[105.808305,20.364128],[105.808144,20.363655],[105.80785,20.362885],[105.807583,20.36238],[105.807157,20.361668],[105.806785,20.361146],[105.806322,20.360285],[105.80586,20.359449],[105.805389,20.358522],[105.804856,20.35757],[105.804101,20.356187],[105.803835,20.355765],[105.803621,20.355351],[105.803461,20.354978],[105.803362,20.35468],[105.803353,20.354447],[105.803386,20.354082],[105.803504,20.353168],[105.803563,20.35262],[105.803579,20.352222],[105.803762,20.351839],[105.80421,20.351223],[105.804733,20.350888],[105.805441,20.350568],[105.8063,20.349983],[105.80702,20.349573],[105.807602,20.349007],[105.808055,20.348582],[105.808495,20.347858],[105.808853,20.347308],[105.809082,20.345541],[105.809083,20.344549],[105.809393,20.342454],[105.80933,20.34187],[105.809465,20.34111],[105.809612,20.340421],[105.80975,20.340005],[105.809973,20.339568],[105.810218,20.339253],[105.810603,20.338907],[105.811117,20.33854],[105.811984,20.33807],[105.813291,20.337527],[105.814309,20.337036],[105.815434,20.336534],[105.816452,20.336023],[105.817801,20.335378],[105.818937,20.334877],[105.819526,20.334611],[105.82106,20.334148],[105.822509,20.333504],[105.82418,20.332693],[105.826879,20.331095],[105.828817,20.329709],[105.831014,20.328486],[105.833784,20.326916],[105.834387,20.326359],[105.834993,20.325685],[105.835991,20.324514],[105.836095,20.324392],[105.837405,20.32262],[105.838821,20.320747],[105.839741,20.31943],[105.841334,20.317264],[105.843033,20.315035],[105.844006,20.313684],[105.846627,20.310331],[105.847582,20.309081],[105.848255,20.308228],[105.848574,20.307923],[105.848877,20.307804],[105.849696,20.307632],[105.852118,20.30725],[105.853685,20.306905],[105.855412,20.306594],[105.857247,20.306324],[105.859456,20.30601],[105.862234,20.305492],[105.864976,20.304982],[105.867826,20.304497],[105.870354,20.304046],[105.871654,20.303771],[105.873114,20.30352],[105.873808,20.30328],[105.87491,20.302585],[105.877199,20.300773],[105.878175,20.299943],[105.879097,20.299215],[105.880162,20.298276],[105.880694,20.297869],[105.88112,20.297564],[105.881511,20.29731],[105.881742,20.297191],[105.882098,20.297038],[105.882507,20.296918],[105.882899,20.296848],[105.883469,20.296829],[105.883968,20.29686],[105.884682,20.297075],[105.886226,20.297912],[105.88944,20.299861],[105.892231,20.301479],[105.8935,20.302179],[105.894181,20.302764],[105.896064,20.30455],[105.898483,20.306792],[105.899467,20.308259],[105.89981,20.308818],[105.900057,20.309287],[105.901204,20.311323],[105.901634,20.312162],[105.902642,20.313966],[105.903221,20.314955],[105.904753,20.317297],[105.905148,20.317806],[105.905736,20.31849],[105.906217,20.318918],[105.907027,20.319535],[105.907943,20.320097],[105.908955,20.320663],[105.909466,20.320941],[105.91018,20.321358],[105.911,20.321865],[105.911867,20.322161],[105.912187,20.32228],[105.912739,20.322307],[105.913865,20.322421],[105.914555,20.322473],[105.915097,20.32253],[105.91581,20.322767],[105.917225,20.323291],[105.918065,20.323627],[105.918502,20.323795],[105.919363,20.324066],[105.919991,20.324273],[105.921034,20.324779],[105.921961,20.325305],[105.922526,20.325618],[105.922994,20.325856],[105.92376,20.326102],[105.925015,20.326497],[105.927015,20.327097],[105.928132,20.327572],[105.929399,20.328142],[105.931538,20.328912],[105.932155,20.329182]]},
          "type":"Feature","properties":{"detailContent":"<div class='landslide-popup container'> <div class='popup-content tab-content'> <div id='thong-tin-sat-lo' class='tab-pane fade in active show'> <div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Tên công trình:</p><p class='p-0 my-2'>Đê Hữu Sông Đáy</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Chiều dài (m):</p><p class='p-0 my-2'>8380</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Cấp đê:</p><p class='p-0 my-2'>3</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Loại đê:</p><p class='p-0 my-2'>Đê sông</p></div><div class='d-flex'> <p class='col-4 p-0 my-2 font-weight-bold'>Thuộc huyện:</p><p class='p-0 my-2'>Huyện Gia Viễn</p></div></div><div id='hinh-anh' class='tab-pane fade'> </div></div></div>"},"id":null
          }
        ]};

      // save data to state
      setData(mapData);
    };
    getData();
  }, []);

  // render react-leaflet GeoJSON when the data is ready
  if (data) {
    return <GeoJSON data={data} style={style} onEachFeature={(feature, layer) => {
      layer.on({
        click: () => {
          layer.bindPopup(feature.properties.detailContent, {closeOnClick: true, autoClose: true}).openPopup()
        },
        mouseover: (e) => {
          e.target.setStyle({
            color: 'orange',
            opacity: 0.5,
            weight: 3
          });
        },
        mouseout: (e) => {
          e.target.setStyle({
            color: 'orange',
            opacity: 1,
            weight: 3
          });
        }
      });
    }} />;
  } else {
    return null;
  }
};

const FlyToButton = ({ position }:{ position:any }) => {
  const map = useMap();

  const handleClick = () => {
    map.flyTo(position, map.getZoom());
  };

  return (
    <button onClick={handleClick}>
      Fly to {position[0]}, {position[1]}
    </button>
  );
};

export default function Map() {

  const [map, setMap] = React.useState<any | null>(null);

  const bing_key = "AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L"

  const [mapCenter, setMapCenter] = React.useState({ lat: 20.246403, lng: 105.967898 });


  return (
    <>
    <MapContainer attributionControl={false} whenReady={() => setMap} center={[20.246403, 105.967898]} zoom={9} style={{ height: '100%' }}>
      <LayersControl position='topright'>
        <BaseLayer name='Bản đồ hành chính'>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </BaseLayer>
        <BaseLayer name='Bản đồ đường'>
          <BingLayer  bingkey={bing_key} type="Road"/>
        </BaseLayer>
        <BaseLayer checked name='Bản đồ vệ tinh'>
          <BingLayer  bingkey={bing_key} type="AerialWithLabels" />
        </BaseLayer>
      </LayersControl>
      <MyData />
      <FlyToButton position={[20.363713, 105.918076]} />
    </MapContainer>
    
    </>
  );

  
}