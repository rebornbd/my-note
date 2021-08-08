### intro
```python
class CommonInfo(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()

    class Meta:
        abstract = True    # if abstract is true then can't create db

class Student(CommonInfo):
    home_group = models.CharField(max_length=5)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'studentdb'            # db table name for the model
        verbose_name = 'student'          # a human-readable name for the object, singular, [if class-name: "CseStudent", default verbose_name = "cse student"]
        verbose_name_plural = 'students'  # the plural name for the object [admin panel list view name]
        ordering = ['-created_at']
```

### model meta options
```python
abstract                    get_latest_by               required_db_features        verbose_name                proxy
app_label                   managed                     required_db_vendor          verbose_name_plural         index_together
base_manager_name           order_with_respect_to       select_on_save              default_manager_name        constraints
db_table                    ordering                    indexes                     default_related_name
db_tablespace               permissions                 unique_together             default_permissions

# read-only meta attributes
label
label_lower
```

### meta options default values
```python
abstract = False                get_latest_by = None            required_db_features = []       verbose_name = None             proxy = False
app_label = None                managed = True                  required_db_vendor = None       verbose_name_plural = None      index_together = []
base_manager_name = None        order_with_respect_to = None    select_on_save = False          default_manager_name = None     constraints = []
db_table = ''                   ordering = []                   indexes = []                    default_related_name = None
db_tablespace =                 permissions = []                unique_together = []            default_permissions = ('add', 'change', 'delete', 'view')
   settings.DEFAULT_TABLESPACE

@property
def label(self):
   return '%s.%s' % (self.app_label, self.object_name)

@property
def label_lower(self):
   return '%s.%s' % (self.app_label, self.model_name)

NB: object_name = None, model_name = None
```
