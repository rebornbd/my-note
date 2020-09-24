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
        <tr></tr>
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
