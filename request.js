db.users.updateMany(

{is_blocked: {$ne: true},
    country: {$ne: 'China'} },
{
         $inc: {
         balance: 200
     }
     }
)

db.users.updateMany(

{balance: {$gte: 100}
    },
{
         $inc: {
         balance: 25 * (-1)
     }
     }
)

db.users.updateMany(

{},
{
         $mul: {
         balance: 0.995
     }
     }
)


db.tracks.updateMany(

{},
{
         $push: {
             tags: {$each: ['alfa', 'beta']
         }
     }
}
)

db.tracks.countDocuments(
{tags: 'alfa'}
)

db.tracks.updateMany(

{},
{
         $pull: {
             tags: 'alfa'}

     }
)

//Ссылка на диаграмму с внедренной функцией чата  https://dbdiagram.io/d/Copy-of-audio_app_jan15_2024-65ae5379ac844320ae702ebf