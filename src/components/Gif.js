import React from 'react';

class Gif extends React.Component{
  render (){
    const style = {
      display: 'flow',
      margin: '0px',
      padding: '10px',
      heigth: '100%'
    }
    const img = {
      width: '100px',
      maxWidth: '150px',
      heigth: '100%'
    }
    return (
        <div className="container">
          <div className="row">
          {
            this.props.gifs.map(singleGif => {
              const url = singleGif.url;
              const title = singleGif.title;
              return (
                <div style={style} className="col-lg-3 col-md-6 col-sm-12">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"className="text-center">
                    <img
                      src={url}
                      alt={title}
                      className="img-fluid" />
                  </a>
                </div>
              )
            })
          }
          </div>
      </div>
    )
  }
}

export default Gif;
