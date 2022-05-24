export default function QuestionCard({question, answer, tip, children}) {
	return (
		<div className='p-4 bg-black rounded-md'>
			<p className='pt-0 pb-0 mt-0 mb-4 text-2xl font-semibold leading-none font-cormorant text-cream-light'>{question}</p>
			<p className='mt-1 mb-0 font-cormorant text-cream-light'>{answer}</p>
			<p className='pt-0 mt-1 mb-0 font-cormorant text-cream-light'>{tip}</p>
			{children}
		</div>
	)
}
