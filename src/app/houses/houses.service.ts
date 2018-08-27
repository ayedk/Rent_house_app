import { House } from "./house.model";
import { Room } from "./room.model";



export class HousesService{


    private Houses:House[] = [
        new House(
            0,
            'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg',
            'big house for familly',
            651,
            'house have 5 rooms',
            '20/10/2108',
            [
                new Room('livingroom','have a big tv'),
                new Room('bedroom','have aa nice bed'),
                new Room('kitchen','have evry thing you need to cook')
            ],
            'ariana-32012-lablabla',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.206967295875!2d10.154306525162621!3d36.86280741119046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335173875caf%3A0x988319e101e8c90d!2sTunis+Grand+Hotel!5e0!3m2!1sen!2stn!4v1534336450452'
        ),
        new House(
            1,
            'https://images.pexels.com/photos/265004/pexels-photo-265004.jpeg',
            'big house for familly',
            651,
            'house have 5 rooms',
            '20/10/2108',
            [
                new Room('livingroom','have a big tv'),
                new Room('bedroom','have aa nice bed'),
                new Room('kitchen','have evry thing you need to cook')
            ],
            'ariana-32012-lablabla',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.206967295875!2d10.154306525162621!3d36.86280741119046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335173875caf%3A0x988319e101e8c90d!2sTunis+Grand+Hotel!5e0!3m2!1sen!2stn!4v1534336450452'
        ),
        new House(
            2,
            'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg',
            'big house for familly',
            651,
            'house have 5 rooms',
            '20/10/2108',
            [
                new Room('livingroom','have a big tv'),
                new Room('bedroom','have aa nice bed'),
                new Room('kitchen','have evry thing you need to cook')
            ],
            'ariana-32012-lablabla',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.206967295875!2d10.154306525162621!3d36.86280741119046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335173875caf%3A0x988319e101e8c90d!2sTunis+Grand+Hotel!5e0!3m2!1sen!2stn!4v1534336450452'
        ),
        new House(
            3,
            'https://images.pexels.com/photos/276511/pexels-photo-276511.jpeg',
            'big house for familly',
            651,
            'house have 5 rooms',
            '20/10/2108',
            [
                new Room('livingroom','have a big tv'),
                new Room('bedroom','have aa nice bed'),
                new Room('kitchen','have evry thing you need to cook')
            ],
            'ariana-32012-lablabla',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.206967295875!2d10.154306525162621!3d36.86280741119046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335173875caf%3A0x988319e101e8c90d!2sTunis+Grand+Hotel!5e0!3m2!1sen!2stn!4v1534336450452'
        ),
        new House(
            4,
            'https://images.pexels.com/photos/1027512/pexels-photo-1027512.jpeg',
            'big house for familly',
            651,
            'house have 5 rooms',
            '20/10/2108',
            [
                new Room('livingroom','have a big tv'),
                new Room('bedroom','have aa nice bed'),
                new Room('kitchen','have evry thing you need to cook')
            ],
            'ariana-32012-lablabla',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.206967295875!2d10.154306525162621!3d36.86280741119046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335173875caf%3A0x988319e101e8c90d!2sTunis+Grand+Hotel!5e0!3m2!1sen!2stn!4v1534336450452'
        ),
        new House(
            5,
            'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg',
            'big house for familly',
            651,
            'house have 5 rooms',
            '20/10/2108',
            [
                new Room('livingroom','have a big tv'),
                new Room('bedroom','have aa nice bed'),
                new Room('kitchen','have evry thing you need to cook')
            ],
            'ariana-32012-lablabla',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.206967295875!2d10.154306525162621!3d36.86280741119046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335173875caf%3A0x988319e101e8c90d!2sTunis+Grand+Hotel!5e0!3m2!1sen!2stn!4v1534336450452'
        ),
        new House(
            6,
            'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg',
            'big house for familly',
            651,
            'house have 5 rooms',
            '20/10/2108',
            [
                new Room('livingroom','have a big tv'),
                new Room('bedroom','have aa nice bed'),
                new Room('kitchen','have evry thing you need to cook')
            ],
            'ariana-32012-lablabla',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.206967295875!2d10.154306525162621!3d36.86280741119046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335173875caf%3A0x988319e101e8c90d!2sTunis+Grand+Hotel!5e0!3m2!1sen!2stn!4v1534336450452'
        ),
        new House(
            7,
            'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg',
            'big house for familly',
            651,
            'house have 5 rooms',
            '20/10/2108',
            [
                new Room('livingroom','have a big tv'),
                new Room('bedroom','have aa nice bed'),
                new Room('kitchen','have evry thing you need to cook')
            ],
            'ariana-32012-lablabla',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.206967295875!2d10.154306525162621!3d36.86280741119046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335173875caf%3A0x988319e101e8c90d!2sTunis+Grand+Hotel!5e0!3m2!1sen!2stn!4v1534336450452'
        ),
        new House(
            8,
            'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg',
            'big house for familly',
            651,
            'house have 5 rooms',
            '20/10/2108',
            [
                new Room('livingroom','have a big tv'),
                new Room('bedroom','have aa nice bed'),
                new Room('kitchen','have evry thing you need to cook')
            ],
            'ariana-32012-lablabla',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.206967295875!2d10.154306525162621!3d36.86280741119046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335173875caf%3A0x988319e101e8c90d!2sTunis+Grand+Hotel!5e0!3m2!1sen!2stn!4v1534336450452'
        ),
        new House(
            9,
            'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
            'big house for familly',
            651,
            'house have 5 rooms',
            '20/10/2108',
            [
                new Room('livingroom','have a big tv'),
                new Room('bedroom','have aa nice bed'),
                new Room('kitchen','have evry thing you need to cook')
            ],
            'ariana-32012-lablabla',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.206967295875!2d10.154306525162621!3d36.86280741119046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335173875caf%3A0x988319e101e8c90d!2sTunis+Grand+Hotel!5e0!3m2!1sen!2stn!4v1534336450452'
        ),
        new House(
            10,
            'https://images.pexels.com/photos/709767/pexels-photo-709767.png',
            'big house for familly',
            651,
            'house have 5 rooms',
            '20/10/2108',
            [
                new Room('livingroom','have a big tv'),
                new Room('bedroom','have aa nice bed'),
                new Room('kitchen','have evry thing you need to cook')
            ],
            'ariana-32012-lablabla',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.206967295875!2d10.154306525162621!3d36.86280741119046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd335173875caf%3A0x988319e101e8c90d!2sTunis+Grand+Hotel!5e0!3m2!1sen!2stn!4v1534336450452'
        )
    ];

    constructor(){}

    getHouses(){
        return this.Houses.slice();
    }

    getHouseId(id:number){
        return this.Houses[id];
    }
}