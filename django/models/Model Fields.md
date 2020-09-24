# relationship fields
```python
OneToOneField
ForeignKey
ManyToManyField
```

<table>
    <thead>
        <tr>
            <th>FIELD TYPES</th>
            <th>FIELD OPTIONS</th>
			<th>FIELD TYPES</th>
			<th>FIELD OPTIONS</th>
			<th>FIELD TYPES</th>
        </tr>
    </thead>
    <tbody>
		<tr>
            <td>
		    	<h5>AutoField</h5>
				<h5>BigAutoField</h5>
				<h5>BigIntegerField</h5>
				<h5>BinaryField</h5>
				<h5>BooleanField</h5>
				<h5>CharField</h5>
				<h5>DateField</h5>
				<h5>DateTimeField</h5>
				<h5>DecimalField</h5>
			</td>
            <td>
				<h6>null</h6>
				<h6>blank</h6>
				<h6>choices</h6>
				<h6>db_column</h6>
				<h6>db_index</h6>
				<h6>db_tablespace</h6>
				<h6>default</h6>
				<h6>editable</h6>
				<h6>error_messages</h6>
			</td>
			<td>
				<h5>DurationField</h5>
				<h5>EmailField</h5>
				<h5>FileField</h5>
				<h5>FilePathField</h5>
				<h5>FloatField</h5>
				<h5>ImageField</h5>
				<h5>IntegerField</h5>
				<h5>GenericIPAddressField</h5>
				<h5>NullBooleanField</h5>
			</td>
			<td>
				<h6>help_text</h6>
				<h6>primary_key</h6>
				<h6>unique</h6>
				<h6>unique_for_date</h6>
				<h6>unique_for_month</h6>
				<h6>unique_for_year</h6>
				<h6>verbose_name</h6>
				<h6>validators</h6>
				<h5>---</h5>
			</td>
			<td>
				<h5>PositiveIntegerField</h5>
				<h5>PositiveSmallIntegerField</h5>
				<h5>SlugField</h5>
				<h5>SmallIntegerField</h5>
				<h5>TextField</h5>
				<h5>TimeField</h5>
				<h5>URLField</h5>
				<h5>UUIDField</h5>
				<h5>---</h5>
			</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>FIELD TYPES</th>
            <th>FIELD OPTIONS</th>
        </tr>
    </thead>
    <tbody>
		<tr>
            <td>SmallIntegerField</td>
            <td rowspan=4>
		null <br />
		blank
	    </td>
        </tr>
		<tr>
            <td>IntegerField</td>
        </tr>
		<tr>
            <td>BigIntegerField</td>
        </tr>
		<tr>
            <td>PositiveSmallIntegerField</td>
        </tr>
		<tr>
            <td>PositiveIntegerField</td>
            <td>blank</td>
        </tr>
		<tr>
            <td>FloatField</td>
            <td>choices</td>
        </tr>
		<tr>
            <td>DecimalField</td>
            <td>db_index</td>
        </tr>
		<tr>
            <td>BooleanField</td>
            <td>db_tablespace</td>
        </tr>
		<tr>
            <td>NullBooleanField</td>
            <td>default</td>
        </tr>
		<tr>
            <td>CharField</td>
            <td>editable</td>
        </tr>
		<tr>
            <td>TextField</td>
            <td>error_messages</td>
        </tr>
		<tr>
            <td>EmailField</td>
            <td>help_text</td>
        </tr>
		<tr>
            <td>DateField</td>
            <td>primary_key</td>
        </tr>
		<tr>
            <td>TimeField</td>
            <td>unique</td>
        </tr>
		<tr>
            <td>DateTimeField</td>
            <td>unique_for_date</td>
        </tr>
		<tr>
            <td>FileField</td>
            <td>unique_for_month</td>
        </tr>
		<tr>
            <td>FilePathField</td>
            <td>unique_for_year</td>
        </tr>
		<tr>
            <td>ImageField</td>
            <td>verbose_name</td>
        </tr>
		<tr>
            <td>GenericIPAddressField</td>
            <td>validators</td>
        </tr>
		<tr>
            <td>DurationField</td>
            <td rowspan=4>db_column</td>
        </tr>
		<tr>
            <td>SlugField</td>
        </tr>
		<tr>
            <td>URLField</td>
        </tr>
		<tr>
            <td>UUIDField</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>FIELD TYPES</th>
            <th>FIELD OPTIONS</th>
            <th>TEMPLATES</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>SmallIntegerField</td>
            <td rowspan=7>blank,null, default</td>
            <td rowspan=7>number</td>
        </tr>
        <tr>
            <td>IntegerField</td>
        </tr>
        <tr>
            <td>BigIntegerField</td>
        </tr>
        <tr>
            <td>PositiveSmallIntegerField</td>
        </tr>
        <tr>
            <td>PositiveIntegerField</td>
        </tr>
        <tr>
            <td>FloatField</td>
        </tr>
        <tr>
            <td>DecimalField</td>
        </tr>
        <tr>
            <td colspan=3></td>
        </tr>
        <tr>
            <td>BooleanField</td>
            <td rowspan=2>blank,null, default</td>
            <td rowspan=2>select</td>
        </tr>
        <tr>
            <td>NullBooleanField</td>
        </tr>
    </tbody>
</table>

| FIELD TYPES | FIELD OPTIONS | TEMPLATES |
| :---         |     :---:      |          ---: |
| SmallIntegerField   | blank,null, default     | number    |
| IntegerField     | blank,null, default       | number      |
| BigIntegerField     | blank,null, default       | number      |

# field types
```python
AutoField
BigAutoField
BigIntegerField
BinaryField
BooleanField
CharField
DateField
DateTimeField
DecimalField
DurationField
EmailField
FileField
FilePathField
FloatField
ImageField
IntegerField
GenericIPAddressField
NullBooleanField
PositiveIntegerField
PositiveSmallIntegerField
SlugField
SmallIntegerField
TextField
TimeField
URLField
UUIDField
```

# field options
```python
null
blank
choices
db_column
db_index
db_tablespace
default
editable
error_messages
help_text
primary_key
unique
unique_for_date
unique_for_month
unique_for_year
verbose_name
validators
```
