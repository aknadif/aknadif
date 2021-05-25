import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import './Gallery.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import pariwisata from '../../img/Original/pariwisata.png'
import tpariwisata from '../../img/Thumb/thmb_pariwisata.png'
import portofolio from '../../img/Original/portofolio_website1.jpg'
import tportofolio from '../../img/Thumb/thmb_portofolio_website.jpg'
import uicostumin from '../../img/Original/ui_costumin.png'
import tuicostumin from '../../img/Thumb/thmb_ui_costumin.png'
import loginpage from '../../img/Original/UI_loginpage.png'
import tloginpage from '../../img/Thumb/thmb_UI_loginpage.png'

export const MyGallery = () => {
    return (      
            <Gallery>
                <Item
                original={pariwisata}
                thumbnail={tpariwisata}
                width="1920"
                height="1080"
                >
                {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={tpariwisata} alt='' className="col-md-4" />
                )}
                </Item>
                <Item
                original={portofolio}
                thumbnail={tportofolio}
                width="1920"
                height="1080"
                >
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={tportofolio} alt='' className="col-md-4" />
                )}
                </Item>
                <Item
                original={uicostumin}
                thumbnail={tuicostumin}
                width="1920"
                height="1080"
                >
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={tuicostumin} alt='' className="col-md-4" />
                )}
                </Item>
                <Item
                original={loginpage}
                thumbnail={tloginpage}
                width="1920"
                height="1080"
                >
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={tloginpage} alt='' className="col-md-4" />
                )}
                </Item>
                
            </Gallery>
    )
}
