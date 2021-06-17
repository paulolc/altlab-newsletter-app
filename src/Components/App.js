import React, {Component, Fragment} from "react"
import {Header, Footer} from "./Layouts"
import NewsletterArticles from "./NewsletterArticles"
import {categories, articles} from "../store.js"

export default class extends Component {
  state = {articles}

  getArticlesByCategory() {
    return Object.entries(
      this.state.articles.reduce((articles, articleCategory) => {
        const {category} = articleCategory

        articles[category] = articles[category]
          ? [...articles[category], articleCategory]
          : [articleCategory]

        return articles
      }, {})
    )
  }

  handleCategorySelected = (category) => {
    this.setState({category})
    console.log("category set to:" + JSON.stringify({category}))
  }

  render() {
    const articles = this.getArticlesByCategory(),
      {category} = this.state

    console.log({articles})
    return (
      <Fragment>
        <Header />
        <NewsletterArticles articles={articles} />
        <Footer
          category={category}
          categories={categories}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    )
  }
}
