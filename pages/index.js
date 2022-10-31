export default function Home(props) {
	return (
		<ul>
			{props.prices.map((price) => (
				<li key={price.id}>{price.price}</li>
			))}
		</ul>
	);
}

export async function getStaticProps() {
	return {
		props: {
			prices: [
				{ id: 1, price: 10 },
				{ id: 2, price: 30 },
				{ id: 3, price: 78 },
			],
		},
	};
}
