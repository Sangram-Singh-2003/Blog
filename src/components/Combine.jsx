import React from 'react'
import ImageGallery from './ImageGallery';
import RightSide from './RightSide';

const Combine=()=>{

          const images = [
            "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQfeT438hsGX55mVMyBZV_mUmQblxAyJl3zC81-W37M9PH_YR0q51twkkpJemQEtcVEBBIpHxKq1_zg8jIVP6Svio5yHjwXrumG9OVa0Tw3MurnfHb4peedRFj3MHz319zPSo_Vxurmidgo5Ndd5AeNSbzNo.jpg?r=1da",
            // "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQbHhxqDALahDo7NqrBiERQE5bjDIvt8NBq_0imcQifscaFq539rUQwt7Org8MpGW27UkrWhntF1HXj4i4nvuN6mVql7WNoEOyK360eU89JQH1iZA-jA6YepScKqK3oSatRqr615cHn9pCVK9N6dPwsWPsPw.jpg?r=7b9",
            // "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQTPz8oaSSx-VebreZsUnYyALASLGgB9qGw8BDlt0fVne6LeviJ7m3wD6rgpPOEiH-6BSLfPgLeP07HzDlZU3T8biFHMUKeqMTDLTRewjkpYx3XfW-9E3UEaGgTaBWMs1b13_ISp_BW9oAvgzQ0lzjOF-RoY.jpg?r=f5b",
          ];

             const imagess = [
            //    "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQfeT438hsGX55mVMyBZV_mUmQblxAyJl3zC81-W37M9PH_YR0q51twkkpJemQEtcVEBBIpHxKq1_zg8jIVP6Svio5yHjwXrumG9OVa0Tw3MurnfHb4peedRFj3MHz319zPSo_Vxurmidgo5Ndd5AeNSbzNo.jpg?r=1da",
               "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQbHhxqDALahDo7NqrBiERQE5bjDIvt8NBq_0imcQifscaFq539rUQwt7Org8MpGW27UkrWhntF1HXj4i4nvuN6mVql7WNoEOyK360eU89JQH1iZA-jA6YepScKqK3oSatRqr615cHn9pCVK9N6dPwsWPsPw.jpg?r=7b9",
               // "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQTPz8oaSSx-VebreZsUnYyALASLGgB9qGw8BDlt0fVne6LeviJ7m3wD6rgpPOEiH-6BSLfPgLeP07HzDlZU3T8biFHMUKeqMTDLTRewjkpYx3XfW-9E3UEaGgTaBWMs1b13_ISp_BW9oAvgzQ0lzjOF-RoY.jpg?r=f5b",
             ];

    return (
      <>
        <div className=" flex ">
          <div>
            <ImageGallery images={images} />
          </div>
          <div>
            {" "}
            <RightSide images={imagess} />
          </div>
        </div>
      </>
    );
}

export default Combine;