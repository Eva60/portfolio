import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://linkdin.com"><AiFillLinkedin/></a>
            <a href="https://github.com"><AiFillGithub/></a>
            <a href="https://dribble.com"><AiFillLinkedin/></a>
        </div>
    )
}

export default HeaderSocials
