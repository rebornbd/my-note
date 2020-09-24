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
        </tr>
    </thead>
    <tbody>
		<tr>
            <td>
		    <h1>AutoField</h1>		<br />
				BigAutoField		<br />
				BigIntegerField		<br />
				BinaryField		<br />
				BooleanField		<br />
				CharField		<br />
				DateField		<br />
				DateTimeField		<br />
				DecimalField		<br />
				DurationField		<br />
				EmailField		<br />
				FileField		<br />
				FilePathField		<br />
				FloatField		<br />
				ImageField		<br />
				IntegerField		<br />
				GenericIPAddressField		<br />
				NullBooleanField		<br />
				PositiveIntegerField		<br />
				PositiveSmallIntegerField		<br />
				SlugField		<br />
				SmallIntegerField		<br />
				TextField		<br />
				TimeField		<br />
				URLField		<br />
				UUIDField		<br />
			</td>
            <td>
				null		<br />
				blank		<br />
				choices		<br />
				db_column		<br />
				db_index		<br />
				db_tablespace		<br />
				default		<br />
				editable		<br />
				error_messages		<br />
				help_text		<br />
				primary_key		<br />
				unique		<br />
				unique_for_date		<br />
				unique_for_month		<br />
				unique_for_year		<br />
				verbose_name		<br />
				validators		<br />
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
