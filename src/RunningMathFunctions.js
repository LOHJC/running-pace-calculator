
function AveragePace(total_distance, time_hour, time_min)
{
    //console.log(total_distance,time_hour,time_min);
    //console.log(typeof(total_distance),typeof (time_hour),typeof(time_min));
    if (total_distance===0 || (time_hour===0 && time_min===0) )
        return "";
    let total_time_min = parseInt(time_hour*60)+parseInt(time_min);
    let avg_pace = total_time_min/total_distance;
    //console.log(FormatPace(avg_pace));
    return FormatPace(avg_pace);
}

function FormatPace(total_time_min)
{
    let time_min = parseInt(total_time_min);
    let time_sec = -1;
    if (time_min===0)
        time_sec = parseInt(total_time_min*60);
    else
        time_sec = parseInt(total_time_min%time_min*60);
    time_sec = time_sec.toString().length===1?"0"+time_sec.toString():time_sec;
    return `${time_min}'${time_sec}"`;
}

function RunLinearly(total_distance, time_hour, time_min, gradient_scale)
{
    let data_array = []

    let dist = Math.floor(total_distance);
    let left_dist = total_distance-dist;

    let total_time_min = parseInt(time_hour*60)+parseInt(time_min);
    let avg_pace_min = total_time_min/total_distance;

    //linear calculation
    let sum_of_x = 0;
    for (let i=1; i<=dist; i++)
    {
        sum_of_x += i;
    }
    let n = dist;
    let m = 0;
    let m_max = 0;
    let c = 0;
    
    if (gradient_scale===0)
        return data_array;

    if (left_dist===0) //distance no decimal place
    {
        m_max = total_time_min/(sum_of_x*n);
        m = m_max/gradient_scale;
        c = (total_time_min - m * sum_of_x) / n;
        
        if (sum_of_x===0 || m===0)
            return data_array;        
    }
    else //distance got decimal place
    {
        let total_time_before_decimal = total_time_min - (left_dist*avg_pace_min);
        m_max = total_time_before_decimal/(sum_of_x*n);
        m = m_max/gradient_scale;
        c = (total_time_before_decimal - m * sum_of_x) / n;
        
        if (sum_of_x===0 || m===0)
            return data_array;
    }

    let i=0;
    let min_time = 0;
    let sec_time = 0;
    //let total_time_min_calculated = 0;
    for (i=1; i<=dist; i++)
    {
        //total_time_min_calculated += m*i + c;
        min_time = Math.floor(m*i + c);
        sec_time = ((m*i + c)-min_time)*60;
        let data = {
            "id": i,
            "dist_km": i,
            "time_min": parseInt(min_time),
            "time_sec": parseInt(sec_time)
        }
        data_array.push(data);
    }

    if (left_dist!==0)
    {
        //total_time_min_calculated += left_dist*avg_pace_min;
        min_time = Math.floor(left_dist*avg_pace_min);
        sec_time  = ((left_dist*avg_pace_min)-min_time)*60;
        let data = {
            "id": i+1,
            "dist_km": Math.round(left_dist * 1000) / 1000, //parseFloat(left_dist).toFixed(3),
            "time_min": parseInt(min_time),
            "time_sec": parseInt(sec_time)
        }
        data_array.push(data);
    }
    //console.log(`total time in min: ${total_time_min_calculated}`);
    return data_array;
}

export { AveragePace, RunLinearly, FormatPace}