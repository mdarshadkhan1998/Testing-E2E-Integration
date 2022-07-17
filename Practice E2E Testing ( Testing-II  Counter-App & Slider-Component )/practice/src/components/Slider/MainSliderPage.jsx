import {useState} from 'react'
import SliderButton from './SliderButton'

const MainSliderPage = () => {
    var [index, setIndex] = useState(0)
    var SliderArr = [
                        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.drPx1e43APo64RZvi25gfwHaEK%26pid%3DApi&f=1",
                        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapertip.com%2Fwmimgs%2F8-88062_lal-kila-wallpaper.jpg&f=1&nofb=1",
                        "https://wi.wallpapertip.com/wsimgs/98-980294_galaxy-background-for-ps4.jpg",
                        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.teahub.io%2Fphotos%2Ffull%2F277-2777540_nature-hd-wallpapers-4k-wallpaper-for-pc-download.jpg&f=1&nofb=1",
                        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapertip.com%2Fwmimgs%2F14-141148_hd-wallpaper-pc-4k.jpg&f=1&nofb=1",
                        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.teahub.io%2Fphotos%2Ffull%2F10-105240_background-disney-castle-cartoon.jpg&f=1&nofb=1",
                    ]
    const countTracker = e => setIndex(e);
  return (
    <div>
        <img src={SliderArr[index]} width='800px' height='400px' alt=''/>
        <SliderButton Count = {countTracker} arr = {SliderArr}/>
    </div>
  )
}

export default MainSliderPage