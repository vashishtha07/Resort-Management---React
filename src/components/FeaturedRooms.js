import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const { loading, featuredRooms } = this.context; // Destructure featuredRooms and loading from context

        // Map through the featured rooms and render Room components
        const rooms = featuredRooms.map(room => <Room key={room.id} room={room} />);

        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms} {/* Show loading or rooms */}
                </div>
            </section>
        );
    }
}
