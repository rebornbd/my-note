## REDIS

### basic
```bash
SET count 0               # set value
GET count                 # get value
DEL count                 # delete value
FLUSHALL                  # delete everything

MSET k1 0 k2 0            # set one or more
MGET k1 k2                # get one or more

INCR count                # increment value
DECR count                # decrement value

RENAME k1 new_key         # rename key
EXISTS count              # exixts then return true

SET count 0               # set value
EXPIRE count 10           # set expire time
SETEX count 10 0          # set value with expire time
TTL count                 # check expire time
PERSIST count             # remove existing timeout | never expire
```

### string
##### a single redis string can be a maximum: 512MB
```bash
SET count 0
GET count
MGET k1 k2
INCR count
DECR count
INCRBY count 5
DECRBY count 5
SETNX k2 0                # SETNX key value | set if key not exist
SETEX k1 50 0             # SETEX key seconds value
PSETEX k2 100 0           # PSETEX key milliseconds value
```

### list
##### The max length of a Redis list: 2^32-1
```bash
LPUSH people rahim        # push left | front
RPUSH people karim        # push right | rear
LPOP people               # pop front
RPOP people               # pop rear
LRANGE people 0 -1        # elements in a specific range
LLEN people               # length of a list
LINDEX people 0           # returns index element
LSET people 0 rahim       # sets list element at index
```

### set
```bash
SADD people1 rahim karim  # add one or more members
SADD people2 karim
SREM people1 rahim        # remove one or more members
SCARD people1             # get the number of members
SMEMBERS people1          # get all the members

SDIFF people1 people2     # subtract multiple sets
SINTER people1 people2    # intersect multiple sets
SUNION people1 people2    # set union | add multiple sets
```

### sorted set
```bash
ZADD people 1997 rahim    # add one or more members
ZCARD people              # get the number of members
ZCOUNT people 0 100       # count the members within range
ZREM people rahim         # remove one or more members
ZRANK people rahim        # determine the index
ZSCORE people rahim       # get the score 
ZRANGE people 0 -1        # return a range 

ZDIFF k1 k2
ZINTER k1 k2
ZUNION k1 k2
```

### hash
##### every hash can store up to: (2^32 - 1)
```bash
HSET user:rahim name "Rahim Khan"
HSET user:rahim email "rahim@gmail.com"
HSET user:karim name "Karim Khan" email "karim@gmail.com"

HGET user:rahim name
HMGET user:rahim name email
HGETALL user:rahim

HKEYS user:rahim
HVALS user:rahim

HLEN user:rahim
HDEL user:rahim name
```
