import axios from 'axios'


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer VwcMPGlSFkCcm4xpe7NFolwSvClxjcKknGeWt3HM2ch7Lfp65EzbiM0AYC5yJtawCzgBaMj2UdYD-pTvIU2XYMuOdB_Uhz8u4Rmljzw50SdTHYj5ATFfMDyIebpPX3Yx'
    }
})