# relationship fields
```python
OneToOneField
ForeignKey
ManyToManyField
```

<table>
    <thead>
        <tr>
            <th>Layer 1</th>
            <th>Layer 2</th>
            <th>Layer 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4>L1 Name</td>
            <td rowspan=2>L2 Name A</td>
            <td>L3 Name A</td>
        </tr>
        <tr>
            <td>L3 Name B</td>
        </tr>
        <tr>
            <td rowspan=2>L2 Name B</td>
            <td>L3 Name C</td>
        </tr>
        <tr>
            <td>L3 Name D</td>
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
