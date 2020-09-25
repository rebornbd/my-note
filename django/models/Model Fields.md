### relationship fields | field types | field options
```python
# relationship fields
OneToOneField		ForeignKey		ManyToManyField

# field types
AutoField		DurationField		PositiveIntegerField		DateTimeField
BigAutoField		EmailField		PositiveSmallIntegerField	DecimalField
BigIntegerField		FileField		SlugField			GenericIPAddressField
BinaryField		FilePathField		SmallIntegerField		UUIDField
BooleanField		FloatField		TextField			NullBooleanField
CharField		ImageField		TimeField
DateField		IntegerField		URLField

# field options
null			db_tablespace		primary_key			verbose_name
blank			default			unique				validators
choices			editable		unique_for_date
db_column		error_messages		unique_for_month
db_index		help_text		unique_for_year
```

<table>
    <thead>
        <tr>
            <th colspan=4>FIELD TYPES</th>
			<th></th>
			<th colspan=3>FIELD OPTIONS</th>
        </tr>
    </thead>
    <tbody>
		<tr>
            <td>
		    	<p>AutoField</p>
				<p>BigAutoField</p>
				<p>BigIntegerField</p>
				<p>BinaryField</p>
				<p>BooleanField</p>
				<p>CharField</p>
				<p>DateField</p>
			</td>
			<td>
				<p>DateTimeField</p>
				<p>DecimalField</p>
				<p>DurationField</p>
				<p>EmailField</p>
				<p>FileField</p>
				<p>FilePathField</p>
				<p>FloatField</p>
			</td>
			<td>
				<p>ImageField</p>
				<p>IntegerField</p>
				<p>GenericIPAddressField</p>
				<p>NullBooleanField</p>
				<p>PositiveIntegerField</p>
				<p>PositiveSmallIntegerField</p>
				<p>SlugField</p>
			</td>
			<td>
				<p>SmallIntegerField</p>
				<p>TextField</p>
				<p>TimeField</p>
				<p>URLField</p>
				<p>UUIDField</p>
				<p>-</p>
				<p>-</p>
			</td>
			<td></td>
			<td>
				<p>null</p>
				<p>blank</p>
				<p>choices</p>
				<p>db_column</p>
				<p>db_index</p>
				<p>db_tablespace</p>
				<p>default</p>
			</td>
			<td>
				<p>editable</p>
				<p>error_messages</p>
				<p>help_text</p>
				<p>primary_key</p>
				<p>unique</p>
				<p>unique_for_date</p>
				<p>unique_for_month</p>
			</td>
			<td>
				<p>unique_for_year</p>
				<p>verbose_name</p>
				<p>validators</p>
				<p>-</p>
				<p>-</p>
				<p>-</p>
				<p>-</p>
			</td>
        </tr>
    </tbody>
</table>


<table>
    <thead>
        <tr>
            <th>FIELD TYPES</th>
            <th>FIELD OPTIONS</th>
			<th>TEMPLATES</th>
			<th>EXAMPLE</th>
        </tr>
    </thead>
    <tbody>
		<tr>
            <td>
		    	<p>SmallIntegerField</p>
				<p>IntegerField</p>
				<p>BigIntegerField</p>
				<p>PositiveSmallIntegerField</p>
				<p>PositiveIntegerField</p>
				<p>FloatField</p>
				<p>DecimalField</p>
			</td>
			<td>
				null, blank, default
			</td>
			<td>
				number
			</td>
			<td>	
				< input type='number' />
			</td>
        </tr>
		<tr>
            <td>
		    	<p>BooleanField</p>
				<p>NullBooleanField</p>
			</td>
			<td>
				null, blank, default
			</td>
			<td>
				select
			</td>
			<td>
				< select> < /select>
			</td>
        </tr>
		<tr>
            <td>
		    	<p>CharField</p>
			</td>
			<td>
				null, blank, default
			</td>
			<td>
				text
			</td>
			<td>
				< input type="text" />
			</td>
        </tr>
		<tr>
            <td>
		    	<p>TextField</p>
			</td>
			<td>
				null, blank, default
			</td>
			<td>
				textarea
			</td>
			<td>
				< textarea> < /textarea>
			</td>
        </tr>
		<tr>
            <td>
		    	<p>EmailField</p>
			</td>
			<td>
				null, blank, default
			</td>
			<td>
				email
			</td>
			<td>
				< input type="email" />
			</td>
        </tr>
		<tr>
            <td>
		    	<p>DateField</p>
				<p>TimeField</p>
				<p>DateTimeField</p>
			</td>
			<td>
				null, blank, default
			</td>
			<td>
				text (date)
			</td>
			<td>
				< input type="text" />
			</td>
        </tr>
		<tr>
            <td>
		    	<p>FileField</p>
				<p>ImageField</p>
			</td>
			<td>
				null, blank, default
			</td>
			<td>
				file
			</td>
			<td>
				< input type="file" />
			</td>
        </tr>
		<tr>
            <td>
		    	<p>FilePathField</p>
			</td>
			<td>
				null, blank, default
			</td>
			<td>
				select
			</td>
			<td>
				< select> < /select>
			</td>
        </tr>
		<tr>
            <td>
		    	<p>GenericIPAddressField</p>
				<p>DurationField</p>
			</td>
			<td>
				null, blank, default
			</td>
			<td>
				text
			</td>
			<td>
				< input type="text" />
			</td>
        </tr>
		<tr>
            <td>
		    	<p>SlugField</p>
				<p>URLField</p>
				<p>UUIDField</p>
			</td>
			<td>
				null, blank, default
			</td>
			<td>
				text
			</td>
			<td>
				< input type="text" />
			</td>
        </tr>
    </tbody>
</table>

