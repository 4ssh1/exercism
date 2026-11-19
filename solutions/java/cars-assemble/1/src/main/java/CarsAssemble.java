public class CarsAssemble {

    public double productionRatePerHour(int speed) {
        double production = 221 * speed;
        double successRate;
        if (speed <= 4){
            successRate = 100;
        }else if(speed <= 8){
            successRate = 90;
        }else if (speed == 9){
            successRate = 80;
        }else{
            successRate = 77;
        }
        return (production * successRate) / 100;
    }

    public int workingItemsPerMinute(int speed) {
        double work = productionRatePerHour(speed);
        int workPerMin = (int) work / 60;
        return workPerMin;
    }
}
