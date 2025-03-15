import React, { useState, useEffect } from "react";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Minus, Plus } from "lucide-react";

const minPrice = 500;
const additionalPrice = 100;
const minHours = 4;
const outStationMinHours = 12;
const outStationBasePrice = 1400;

const PricingCalculator = () => {
  const [activeTab, setActiveTab] = useState("local");
  const [hours, setHours] = useState(minHours);
  const [days, setDays] = useState(1);
  const [total, setTotal] = useState(minPrice);

  const calculateCharges = (hours, days, isOutStation) => {
    let minHrs = isOutStation ? outStationMinHours : minHours;
    let dailyTotal = isOutStation
      ? outStationBasePrice + (hours - minHrs) * additionalPrice
      : hours <= minHrs
        ? minPrice
        : minPrice + (hours - minHrs) * additionalPrice;
    return dailyTotal * days;
  };

  useEffect(() => {
    if (activeTab === "out-of-station" && hours < outStationMinHours) {
      setHours(outStationMinHours);
    }
    setTotal(calculateCharges(hours, days, activeTab === "out-of-station"));
  }, [hours, days, activeTab]);

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg border rounded-lg overflow-hidden">
      <CardHeader className="bg-primary text-white p-2 text-center">
        <CardTitle className="text-2xl font-bold">Pricing Calculator</CardTitle>
        <CardDescription>
          Calculate the cost for your driver service
        </CardDescription>
      </CardHeader>
      <Tabs defaultValue="local" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 bg-gray-100 p-0 rounded-lg">
          <TabsTrigger value="local">Local</TabsTrigger>
          <TabsTrigger value="out-of-station">Out of Station</TabsTrigger>
        </TabsList>
        <CardContent className="p-6 space-y-6">
          <TabsContent value={activeTab} className="space-y-6">
            <div className="space-y-4">
              <label className="font-medium">Hours per Day</label>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() =>
                    setHours(
                      Math.max(
                        activeTab === "out-of-station"
                          ? outStationMinHours
                          : minHours,
                        hours - 1,
                      ),
                    )
                  }
                >
                  <Minus />
                </Button>
                <Input
                  type="number"
                  value={hours}
                  onChange={(e) =>
                    setHours(
                      parseInt(e.target.value) ||
                        (activeTab === "out-of-station"
                          ? outStationMinHours
                          : minHours),
                    )
                  }
                />
                <Button onClick={() => setHours(Math.min(24, hours + 1))}>
                  <Plus />
                </Button>
              </div>
              <label className="font-medium">Number of Days</label>
              <div className="flex items-center gap-2">
                <Button onClick={() => setDays(Math.max(1, days - 1))}>
                  <Minus />
                </Button>
                <Input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(parseInt(e.target.value) || 1)}
                />
                <Button onClick={() => setDays(days + 1)}>
                  <Plus />
                </Button>
              </div>
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
      <CardFooter className="p-6 flex flex-col items-center bg-gray-50 rounded-b-lg">
        <div className="text-2xl font-bold text-primary">
          Totla: ₹{total.toLocaleString("en-IN")}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PricingCalculator;
