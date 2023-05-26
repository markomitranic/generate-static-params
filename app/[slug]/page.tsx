export async function generateStaticParams() {
	return [{ slug: 'hello' }, { slug: 'world' }];
}

export default function Page() {
	return <h1>Heya</h1>;
}
