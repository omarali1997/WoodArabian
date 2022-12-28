import React from "react";
import { Card } from "react-bootstrap";
import "./Laminates.css";


const Image = () => {
  const images = [

    
    {
      title: "كومباك",
      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/12/Laminate2.png',
      alt: 'woodss',
    },
    {
      title: "(cpi) فورمايكا ",
      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/12/Laminate3.png',
      alt: 'woodff',
    },
        {
      title: "(hpi) فورمايكا ",
      src: 'https://wood.digit-tips.com/wp-content/uploads/2022/12/Laminate4.png',
      alt: 'woodee',
    }
  ];
  return (
    <>
      <h6 className="h6main">
                 فورمايكا
        </h6>
        <img className="main" src='https://wood.digit-tips.com/wp-content/uploads/2022/12/Laminate1.png' alt='woodgg' />

      <div className="hoverImg">
        {images.map((image) => (
          <>
            <Card className="card_finishedPanel">
              <Card.Header style={{ border: 'none' }}>
                <Card.Text>
                  <h6>
                    {image.title}
                  </h6>
                </Card.Text>
              </Card.Header>
              <Card.Body style={{ border: 'none' }}>
                <Card.Img src={image.src} alt={image.alt}>
                </Card.Img>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    </>

  );
}

export default Image;

