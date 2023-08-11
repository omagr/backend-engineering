1. show all dbs
- show dbs

2. switch/create to other dbs
- use _

3. create/switch to a collection
- db._

4. insert one property
- db._.insertOne({})

5. insert many propertise
- db._.insertMany([{},{}])

6. find all propertise 
- db._.find()

# sorting
1. sort by alphabatical order
- db._.find().sort({string: 1})  // for alphabatical order
- db._.find().sort({string: -1}) // for reverse alphabatical order

2. sort by asending order
- db._.find().sort({number: 1})  // for asending order
- db._.find().sort({number: -1}) // for descending order

# limit
1. limit documents by number
- db._.find().limit(1) 

# find 
1. finding only one object
- db._.find({query}, {projection})

ex- db._.find({name: 'tanya'})              // [{_id, name: 'tanya', ...} ...]
ex- db._.find({})                           // [...]
ex- db._.find({}, {_id:false, name: true})  // [{name: 'tanya'} ...]

# update documents
1. update one
- db._.updateOne({filter}, {update})

ex- db._.updateOne({name: 'tanya'}, {$set: {fulltime: true}})
// [{_id, name: 'tanya', fulltime: true, ...}]
ex- db._.updateOne({name: 'tanya'}, {$unset: {fulltime: ''}})
// [{_id, name: 'tanya', ...]]

2. update many 
- db._.updateMany({filter}, {update})

$set
ex- db._.updateMany({}, {$set: {fulltime: true}})
// [{fulltime: true, ...}, {fulltime: true, ...}, ...]
$unset
ex- db._.updateMany({}, {$unset: {fulltime: ''}})
// [{...}, {...}, ...]
$exits
ex- db._.updateMany({fullTime: $exists: true}, {$set: {fulltime: false}})
// [{fulltime: false, ...}, {fulltime: false, ...}]

# delete documents
1. delete one
- db._.deleteOne({filter})

1. delete many
- db._.deleteMany({filter})

# opeartors
$set
$unset
$exits

- comparison operators
$ne => {name: {$ne:'tanya'}} => name != tanya
$in => {name: {$in: ['tanya','aastha']}} => name == tanya || name == aastha
$nin => {name: {$nin: ['tanya','aastha']}} => name != tanya || name != aastha

$lt => {age: {$lt:20}} => age < 20
$lte => {age: {$lt:20}} => age <= 20
$gte => {age: {$gte:20}} => age >= 20
$gt => {age: {$gt:20}} => age > 20 => {age: {$gt:20}, age: {$lt:20}}

- logical operaotors
$and => {$and: {[fullTime: true, {age:{$lte:22}}]}} => fullTime == true && age <= 22
$or => {$or: {[fullTime: true, {age:{$lte:22}}]}} => fullTime == true || age <= 22
$nor => {$nor: {[fullTime: true, {age:{$lte:22}}]}} => fullTime != true && age > 22
$not => {age: {$not: {$lte:30}}} => age > 20 || null

# indexes
