# Schema Types
#### A Schema Type is a configuration object for an individual property
```
String        | { type: String }
Number        | { type: Number, min: 5, max: 10 }
Date          | { type: Date, default: Date.now }
Buffer        | { type: Buffer }
Boolean       | { type: Boolean }
Mixed         |
ObjectId      | { type: Schema.Types.ObjectId, ref: "User" }
Array         | [{ type: String }] // array with str values
Decimal128    |
Map           | { type: Map, of: String }
Schema        | { user: { type: useSchema }}
```

### type propertise
<table>
  <tr>
    <th></th>
    <th>String</th>
    <th>Number</th>
    <th>Date</th>
  </tr>
  <tr>
    <td>00</td>
    <td>
      <div>lowercase</div>
      <div>uppercase</div>
      <div>trim</div>
      <div>match</div>
      <div>enum</div>
      <div>minLength</div>
      <div>maxLength</div>
      <div>populate</div>
    </td>
    <td>
      <div>min</div>
      <div>max</div>
      <div>enum</div>
      <div>populate</div>
    </td>
    <td>
      <div>min</div>
      <div>max</div>
    </td>
  </tr>
</table>

