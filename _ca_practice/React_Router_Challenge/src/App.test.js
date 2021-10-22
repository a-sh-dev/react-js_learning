import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

test('renders Home', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Home/i)
  expect(linkElement).toBeInTheDocument()
})

describe('renders Home and Poke List links', () => {
	it('renders home link', () => {
		const {queryByText} = render(<App />)
		const homeLink = queryByText(/home/i)
		expect(homeLink).toBeVisible()
	})
	it('renders Poke List link', () => {
		const {queryByText} = render(<App />)
		const pokeListLink = queryByText(/poke list/i)
		expect(pokeListLink).toBeVisible()
	})
})

describe('/pokeList',() => {
	it('routes to Pokemon List', () => {
		const {queryByText} = render(<App />)
		const pokeListLink = queryByText(/poke list/i)
		fireEvent.click(pokeListLink)
		const pokemons = queryByText(/pokemons/i)
		expect(pokemons).toBeVisible()
	})
})

describe('/',() => {
	it('routes to Home', () => {
		const {queryByText} = render(<App />)
		const home = queryByText(/home/i)
		fireEvent.click(home)
		const homeHeader = queryByText(/pokemon viewer/i)
		expect(homeHeader).toBeVisible()
	})
})