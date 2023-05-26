import React from 'react';

function QuickLink({text, dest}) {
	return (
		<a href={dest}>{text}</a>
	);
}

export default QuickLink;
