import React from 'react'
import { MyGallery } from '../Animations/Gallery/Gallery';
import './Portofolio.css'

export const Portofolio = () => {
    return (
    <section id="projects" className="projects">
        <div className="container">
            <div className="row text-center text-dark mb-3">
            <div className="col">
                <h2>My Projects</h2>
            </div>
            <ul className="list-group list-group-horizontal justify-content-center mb-2">
                <a href="/#" class="list-group-item active" data-filter="ALL">ALL</a>
                <a href="/#" class="list-group-item" data-filter="Website">Website</a>
                <a href="/#" class="list-group-item" data-filter="UI">UI/UX</a>
            </ul>
            <div className="row justify-content-center">
            <MyGallery />
            </div>
        </div>
        
        </div>
    </section>
    )
}
