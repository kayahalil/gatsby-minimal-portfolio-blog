import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'
import contactData from './../data/contact'

class Contact extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const siteDescription = get(
			this,
			'props.data.site.siteMetadata.description'
		)

		return (
			<Layout>
				<Helmet
					htmlAttributes={{ lang: 'tr' }}
					meta={[{ name: 'description', content: siteDescription }]}
					title={`İletişim`}
				/>

				<h2>İletişim</h2>
				<br />

				{Object.keys(contactData).map(key => {
					if (contactData[key]) {
						return (
							<p key={key}>
								<b>{key}: </b>
								{
									key !== 'email' ?
										<a href={contactData[key]} target="_new">
											{contactData[key]}
										</a> :
										<a href={'mailto:' + contactData[key]} target="_new">
											{contactData[key]}
										</a>
								}

							</p>
						)
					}
				})}
			</Layout>
		)
	}
}

export default Contact

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
