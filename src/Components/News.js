import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'


export class News extends Component {


   constructor() {
      super()

      this.state = {
         articles: [],
         loading: false,
         page: 1,


      }
   }

   async componentDidMount() {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=128a286018b54997a8473eb21204729c&page=1&pageSize=${this.props.pageSize}`
      this.setState({ loading:true})
      let data = await fetch(url)
      let parseddata = await data.json()
      console.log(parseddata)
      this.setState({ articles: parseddata.articles, 
         totalresult: parseddata.totalresult,
         loading:false
      
      })

   }

   handleNextClick = async () => {
      console.log("Next");
      const { page, totalresult } = this.state;
      const nextPage = page + 1;
  
      if (!(nextPage > Math.ceil(totalresult / this.props.pageSize))) {
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=128a286018b54997a8473eb21204729c&page=${nextPage}&pageSize=${this.props.pageSize}`;
          this.setState({ loading:true})
          let data = await fetch(url);
          let parseddata = await data.json();
          console.log(parseddata);
          this.setState((prevState) => ({
              page: nextPage,
              articles: parseddata.articles,
              totalresult: parseddata.totalResults,
              loading:false,

          }));
      }
  };
   handlePreviousClick = async () => {
      console.log("Previous")

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=128a286018b54997a8473eb21204729c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url)
      let parseddata = await data.json()
      console.log(parseddata)
      this.setState({
         page: this.state.page - 1,
         articles: parseddata.articles,
         loading:false,
      })

   }



   render() {
      return (



         <div className='container my-3 div3'>
            <h2 className='heading'>NewsMonkey - Top Headlines </h2>
            {this.state.loading&&<Spinner/>}

            <div className="row">
               {!this.state.loading&&this.state.articles.map((element) => {
                  if (element.urlToImage == null) {
                     return null;

                  }
                  else {
                     return <div className="col-md-4" key={element.url} >
                        <NewsItem title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageurl={element.urlToImage} newsURL={element.url} />
                     </div>
                  }


               })}

            </div>

            <div className="container d-flex justify-content-between">
               <button type="button" disabled={this.state.page <= 1} onClick={this.handlePreviousClick} className="btn btn-outline-light">&larr;Previous</button>
               <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalresult / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-outline-light">Next&rarr;</button>
            </div>




         </div>
      )
   }
}

export default News
