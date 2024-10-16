import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'
export default class Services extends
    Component {
    state = {
        services: [
            {
                icocn: <FaCocktail />,
                title: "Free Cocktails",
                info: 'hello amevia avi nov suirn rarvnsri rvn iau vnsiu evisu visu bvisbvh siuebvh iuts hebivuf '
            },
            {
                icocn: <FaHiking />,
                title: "Endless Hiking",
                info: 'hello amevia avi nov suirn rarvnsri rvn iau vnsiu evisu visu bvisbvh siuebvh iuts hebivuf '
            },
            {
                icocn: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'hello amevia avi nov suirn rarvnsri rvn iau vnsiu evisu visu bvisbvh siuebvh iuts hebivuf '
            },
            {
                icocn: <FaBeer />,
                title: "Strongeset Beer",
                info: 'hello amevia avi nov suirn rarvnsri rvn iau vnsiu evisu visu bvisbvh siuebvh iuts hebivuf '
            }
        ]
    }
    render() {
        return (
            <section className='services'>

                <Title title="services" />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.title}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}