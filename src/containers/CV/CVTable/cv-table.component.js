import React from "react";
import {useTranslation} from "react-i18next";

export const CVTableComponent = ({sections, history}) => {

	const {t} = useTranslation();

	return (
		<table className="table">
			<thead className="table-primary">
			<tr>
				{ sections.map((title) =>
					<th scope="col" key={title} style={{textTransform: "uppercase"}}>
						{t(`cv:titles.${title}`)}
					</th>
				)}
			</tr>
			</thead>
			<tbody>
			{ history.map((x) =>
				<tr key={`tr-${x.reduce((acc, y) => acc + y)}`}>
					{x.map((y) => <td key={y}>{isNaN(y) ? t(`cv:other.${y}`) : y}</td>)}
				</tr>
			)}
			</tbody>
		</table>
	);
};