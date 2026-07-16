import { Table } from "@nice-digital/nds-table";

export const DefaultTable = () => (
	<Table>
		<thead>
			<tr>
				<th scope="col">Ref</th>
				<th scope="col">Title</th>
				<th scope="col">Date</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>ABC1</td>
				<td>Lorem ipsum dolor sit amet</td>
				<td>27/08/2022</td>
			</tr>
			<tr>
				<td>XYZ2</td>
				<td>Aliquam consectetur posuere nibh dapibus consequat</td>
				<td>25/12/2023</td>
			</tr>
		</tbody>
	</Table>
);

export const CaptionedTable = () => (
	<Table>
		<caption>Here is a caption!</caption>
		<thead>
			<tr>
				<th scope="col">Ref</th>
				<th scope="col">Title</th>
				<th scope="col">Date</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>ABC1</td>
				<td>Lorem ipsum dolor sit amet</td>
				<td>27/08/2022</td>
			</tr>
			<tr>
				<td>XYZ2</td>
				<td>Aliquam consectetur posuere nibh dapibus consequat</td>
				<td>25/12/2023</td>
			</tr>
		</tbody>
	</Table>
);
