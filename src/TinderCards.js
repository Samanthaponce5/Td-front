import { SwipeableDrawer } from '@material-ui/core'
import React, {useState} from 'react'
import TinderCard from "react-tinder-card"
import './TinderCards.css'


function TinderCards(){
    const [people, setPeople] = useState([
        {
            name: "John",
            url:'https://i.pinimg.com/originals/90/2a/39/902a392d7af51b9ef526944138d15c98.jpg'
        },
        {
            name: "Aaron",
            url:'https://i.pinimg.com/originals/ce/0a/9d/ce0a9daae7f226a6cdb263e72fe68174.jpg'
        },
        {
            name: "Marcos",
            url:'https://i.pinimg.com/originals/97/2e/03/972e0352e034e81d53ce4cd4031ee18c.jpg'
        },
        {
            name: "Sam Kolder",
            url:'https://i.redd.it/qcjzhnbbh8941.jpg'
        },
        {
            name: "Jenny",
            url:'https://i1.wp.com/www.andysmarketing.com/wp-content/uploads/2018/01/Paulina-Feb23-2017.jpg?ssl=1'
        },
        {
            name: "Kelsey",
            url:'https://assets.teenvogue.com/photos/5be4b839368e21796e2d8a9f/1:1/w_3712,h_3712,c_limit/GettyImages-1059211450.jpg'
        },
        {
            name: "Susan",
            url:'https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: "Kelv",
            url:'https://i1.wp.com/www.menstylefashion.com/wp-content/uploads/2012/12/Godfrey-Gao-in-the-Louis-vuitton.jpg?fit=630%2C350&ssl=1'
        },
        {
            name: "Johnny",
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOXSepkS39nLqoQz6V8EbKYHqofFOogfeGg&usqp=CAU'
        },
        {
            name: "Jack",
            url:'https://stanley-models.co.uk/wp-content/uploads/2019/11/Jack-Bull-StanleysModelAgency-BlackMaleModel-Nottingham-UK1-Models.jpg'
        }

    ])

    const swiped=(direction, nameToDelete)=>{
        console.log('removing: ' + nameToDelete)
    }

    const outOfFrame=(name)=>{
        console.log(name + ' left the screen!')
    }

    return(
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map((person)=>
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                >

                    <div
                    style={{backgroundImage: "url(" + person.url + ")"}}
                    className="card"
                    >
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>
                )}
            </div>
        </div>
    )
}

export default TinderCards 