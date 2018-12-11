import React from 'react';
import Instafeed from 'react-instafeed'
import '../css/instagramPosts.css';

const InstagramPosts = () => {

const instafeedTarget = 'instafeed';

  return (
    <div id='instafeed'>
      <Instafeed
        limit='100'
        // ref='instafeed'
        resolution='standard_resolution'
        sortBy='most-recent'
        // target='instafeed'
        template='<a href="{{link}}" target=_blank><img src="{{image}}"/></a>'
        userId='2320194257'
        clientId='dee8a826e8d94feb94c2ea6b72581598'
        accessToken='2320194257.1677ed0.f2fcf458a4cb4cd4b9df266b53f5cb29'
      />
    </div>
  )
}

export default InstagramPosts;
