import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodycontentright',
  templateUrl: './bodycontentright.component.html',
  styleUrls: ['./bodycontentright.component.css']
})
export class BodycontentrightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  actionEvent() {
    console.log("Form is submitted")
  }

  thumbnail_img = "https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg"
  video_title = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."

  UploadedVideos(){
    var video = [
      { 
        "id": 1, 
        "thumbnail_img": "https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg", 
        "video_title":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "duration_time":"9 mins"
      },
      { 
        "id": 2, 
        "thumbnail_img": "https://img.youtube.com/vi/GeT28l2PJB8/sddefault.jpg", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 3, 
        "thumbnail_img": "https://www.coderepublics.com/tools/Images/youtube-thumbnail-size.png", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 4, 
        "thumbnail_img": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/142677140/original/f1a57341e505219885e6511c71dac1e98537831b/design-professional-youtube-thumbnail.jpg", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 5, 
        "thumbnail_img": "https://d2ct9xspam8wud.cloudfront.net/blog/2019/06/11095046/Youtube_Thumbnail1.png", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 6, 
        "thumbnail_img": "https://www.fotojet.com/template-imgs/social-media-header/youtube-thumbnail/fashion-dress-fashionably-youtube.jpg", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 1, 
        "thumbnail_img": "https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg", 
        "video_title":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "duration_time":"9 mins"
      },
      { 
        "id": 2, 
        "thumbnail_img": "https://img.youtube.com/vi/GeT28l2PJB8/sddefault.jpg", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 3, 
        "thumbnail_img": "https://www.coderepublics.com/tools/Images/youtube-thumbnail-size.png", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 4, 
        "thumbnail_img": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/142677140/original/f1a57341e505219885e6511c71dac1e98537831b/design-professional-youtube-thumbnail.jpg", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 5, 
        "thumbnail_img": "https://d2ct9xspam8wud.cloudfront.net/blog/2019/06/11095046/Youtube_Thumbnail1.png", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 6, 
        "thumbnail_img": "https://www.fotojet.com/template-imgs/social-media-header/youtube-thumbnail/fashion-dress-fashionably-youtube.jpg", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 1, 
        "thumbnail_img": "https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg", 
        "video_title":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "duration_time":"9 mins"
      },
      { 
        "id": 2, 
        "thumbnail_img": "https://img.youtube.com/vi/GeT28l2PJB8/sddefault.jpg", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 3, 
        "thumbnail_img": "https://www.coderepublics.com/tools/Images/youtube-thumbnail-size.png", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 4, 
        "thumbnail_img": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/142677140/original/f1a57341e505219885e6511c71dac1e98537831b/design-professional-youtube-thumbnail.jpg", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 5, 
        "thumbnail_img": "https://d2ct9xspam8wud.cloudfront.net/blog/2019/06/11095046/Youtube_Thumbnail1.png", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
      { 
        "id": 6, 
        "thumbnail_img": "https://www.fotojet.com/template-imgs/social-media-header/youtube-thumbnail/fashion-dress-fashionably-youtube.jpg", 
        "video_title":"Taarak Mehta Ka Ooltah Chashmah",
        "duration_time":"20 mins"
      },
    ];
    return video;
  }


}
